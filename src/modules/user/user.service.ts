import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';
import { genSaltSync, hashSync } from 'bcrypt';
import { randomBytes } from 'crypto';
import { DomainService } from '../domain/domain.service';
import { ActivateUserInput, CreateUserInput, UpdateUserInput } from './user.interface';
import { DuplicateUsernameError } from './errors/duplicateUsername.error';
import { UserAlreadyActivated } from './errors/userAlreadyActivated.error';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly domainService: DomainService,
  ) {}

  async findOne(username: string) {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async findOneById(userId: number, options?: FindOneOptions) {
    return this.userRepository.findOneOrFail(userId, options);
  }

  async getAllUser() {
    return this.userRepository.find();
  }

  async activateUser(input: ActivateUserInput) {
    const existingUsername = await this.userRepository.find({ where: { username: input.username } });
    if (existingUsername.length !== 0) {
      throw new DuplicateUsernameError();
    }

    const user = await this.userRepository.findOne(input.userId);
    if (user.isAccountActivated) {
      throw new UserAlreadyActivated();
    }

    if (input.username && input.password) {
      const salt = genSaltSync();
      const hashedPassword = hashSync(input.password, salt);

      user.username = input.username;
      user.password = hashedPassword;
    }
    user.isAccountActivated = true;
    return this.userRepository.save(user);
  }

  async createUser(input: CreateUserInput): Promise<User> {
    const activationToken = randomBytes(16).toString('hex');
    return this.userRepository.save({ ...input, activationToken });
  }

  async attachDisciple(leaderId: number, discipleId: number): Promise<User> {
    const leader = await this.findOneById(leaderId, { relations: ['disciples'] });
    const disciple = await this.findOneById(discipleId);

    if (!leader.disciples) {
      leader.disciples = [disciple];
    } else {
      leader.disciples.push(disciple);
    }

    return this.userRepository.save(leader);
  }

  async updateUser(userId: number, input: UpdateUserInput): Promise<User> {
    if (input.password) {
      const salt = genSaltSync();
      const hashedPassword = hashSync(input.password, salt);
      input.password = hashedPassword;
    }

    await this.userRepository.save({
      id: userId,
      ...input,
    });

    return this.findOneById(userId);
  }
}
