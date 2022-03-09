import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LifeGroup } from './lifeGroup.entity';

@Injectable()
export class LifeGroupService {
  constructor(
    @InjectRepository(LifeGroup)
    private readonly lifeGroupRepository: Repository<LifeGroup>,
  ) {}

  async getLifeGroups(): Promise<LifeGroup[]> {
    return this.lifeGroupRepository.find();
  }
}
