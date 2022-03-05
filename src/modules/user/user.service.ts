import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { genSaltSync, hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(username: string) {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async getAllUser() {
    return this.userRepository.find();
  }

  async createUser(name: string, username: string, password: string) {
    const salt = genSaltSync();
    const hashedPassword = hashSync(password, salt);
    return this.userRepository.save({ name, username, password: hashedPassword });
  }
}
