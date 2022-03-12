import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { GqlLifeGroupMember } from '../lifeGroupMember/lifeGroupMember.interface';
import { LifeGroupRole } from '../lifeGroupMember/lifeGroupMember.entity';
import { LifeGroupMemberService } from '../lifeGroupMember/lifeGroupMember.service';
import { UserService } from '../user/user.service';
import { LifeGroup } from './lifeGroup.entity';

@Injectable()
export class LifeGroupService {
  constructor(
    @InjectRepository(LifeGroup)
    private readonly lifeGroupRepository: Repository<LifeGroup>,
    private readonly userService: UserService,
    private readonly lifeGroupMemberService: LifeGroupMemberService,
  ) {}

  async getLifeGroups(): Promise<LifeGroup[]> {
    return this.lifeGroupRepository.find();
  }

  async createLifeGroup(title: string): Promise<LifeGroup> {
    return this.lifeGroupRepository.save({ title });
  }

  async addMember(userId: number, lifeGroupId: number, role: LifeGroupRole): Promise<LifeGroup> {
    const user = await this.userService.findOneById(userId);
    const lifeGroup = await this.lifeGroupRepository.findOneOrFail(lifeGroupId);

    await this.lifeGroupMemberService.createMember(user, lifeGroup, role);
    return lifeGroup;
  }

  async getMembers(lifeGroup: LifeGroup): Promise<GqlLifeGroupMember[]> {
    return this.lifeGroupMemberService.getMembers(lifeGroup);
  }

  async findOneById(lifeGroupId: number, options?: FindOneOptions): Promise<LifeGroup> {
    return this.lifeGroupRepository.findOneOrFail(lifeGroupId, options);
  }
}
