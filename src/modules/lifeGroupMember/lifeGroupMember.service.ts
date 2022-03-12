import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LifeGroup } from '../lifeGroup/lifeGroup.entity';
import { User } from '../user/user.entity';
import { GqlLifeGroupMember } from './lifeGroupMember.interface';
import { LifeGroupMember, LifeGroupRole } from './lifeGroupMember.entity';

@Injectable()
export class LifeGroupMemberService {
  constructor(
    @InjectRepository(LifeGroupMember)
    private readonly lifeGroupMemberRepository: Repository<LifeGroupMember>,
  ) {}

  async createMember(user: User, lifeGroup: LifeGroup, role: LifeGroupRole): Promise<LifeGroupMember> {
    return this.lifeGroupMemberRepository.save({
      user: user,
      lifeGroup: lifeGroup,
      role: role,
    });
  }

  async getMembers(lifeGroup: LifeGroup): Promise<GqlLifeGroupMember[]> {
    const lifeGroupMembers = await this.lifeGroupMemberRepository.find({
      where: {
        lifeGroup,
      },
      relations: ['user'],
    });
    return lifeGroupMembers.map((member) => {
      return {
        user: member.user,
        role: member.role,
      };
    });
  }
}
