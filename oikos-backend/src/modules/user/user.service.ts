import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { User } from './user.entity';
import { genSaltSync, hashSync } from 'bcrypt';
import { randomBytes } from 'crypto';
import {
  ActivateUserInput,
  CreateUserInput,
  GetAllUsersPaginatedFilterInput,
  GetAllUsersPaginatedInput,
  UpdateUserInput,
} from './user.interface';
import { DuplicateUsernameError } from './errors/duplicateUsername.error';
import { UserAlreadyActivated } from './errors/userAlreadyActivated.error';
import { LifeGroupMemberService } from '../lifeGroupMember/lifeGroupMember.service';
import { MentorshipService } from '../mentorship/mentorship.service';
import { PaginationService } from '../common/pagination/pagination.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly lifeGroupMemberService: LifeGroupMemberService,
    private readonly mentorshipService: MentorshipService,
    private readonly paginationService: PaginationService,
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

  async getAllUsersPaginated(input: GetAllUsersPaginatedInput) {
    return this.paginationService.handleRequest<GetAllUsersPaginatedFilterInput, User>(input, this.userRepository);
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

    await this.mentorshipService.attachDisciple(leader, disciple);
    return leader;
  }

  async getLeaders(user: User): Promise<User[]> {
    return this.mentorshipService.getLeaders(user);
  }

  async getDisciples(user: User): Promise<User[]> {
    return this.mentorshipService.getDisciples(user);
  }

  async save(user: User) {
    return this.userRepository.save(user);
  }

  async updateUser(userId: number, input: UpdateUserInput): Promise<User> {
    if (input.password) {
      const salt = genSaltSync();
      const hashedPassword = hashSync(input.password, salt);
      input.password = hashedPassword;
    }

    const user = await this.findOneById(userId);
    const { id, isActive, ...oldUser } = user;

    const isDirty = Object.keys(UpdateUserInput).some((prop) => {
      return prop ? true : false;
    });

    if (isDirty) {
      await this.userRepository.save({
        ...oldUser,
        isActive: false,
      });

      await this.userRepository.save({
        id: user.id,
        history: user.history + 1,
        ...input,
      });
    }

    return this.findOneById(userId);
  }

  async getLifeGroups(user: User) {
    return this.lifeGroupMemberService.getLifeGroups(user);
  }
}
