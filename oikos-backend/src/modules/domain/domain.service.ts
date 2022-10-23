import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { Domain } from './domain.entity';

@Injectable()
export class DomainService {
  constructor(
    @InjectRepository(Domain)
    private readonly domainRepository: Repository<Domain>,
  ) {}

  async getDomains(): Promise<Domain[]> {
    return this.domainRepository.find();
  }

  async createDomain(title: string, address: string): Promise<Domain> {
    return this.domainRepository.save({
      title,
      address,
    });
  }

  // async getUsersDomain(user: User): Promise<Domain> {
  //   return this.domainRepository.
  // }
}
