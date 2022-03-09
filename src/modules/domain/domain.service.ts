import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
