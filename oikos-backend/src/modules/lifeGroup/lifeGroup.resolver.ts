import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Domain } from '../domain/domain.entity';
import { LifeGroupRole } from '../lifeGroupMember/lifeGroupMember.entity';
import { GqlLifeGroupMember } from '../lifeGroupMember/lifeGroupMember.interface';
import { LifeGroup } from './lifeGroup.entity';
import { LifeGroupService } from './lifeGroup.service';

@Resolver((of) => LifeGroup)
export class LifeGroupResolver {
  constructor(private readonly lifeGroupService: LifeGroupService) {}

  @Query((returns) => [LifeGroup])
  async getLifeGroups(): Promise<LifeGroup[]> {
    return this.lifeGroupService.getLifeGroups();
  }

  @ResolveField((of) => [GqlLifeGroupMember])
  async members(@Parent() lifeGroup: LifeGroup) {
    return await this.lifeGroupService.getMembers(lifeGroup);
  }

  @ResolveField((returns) => Domain, { nullable: true })
  async domain(@Parent() lifeGroup: LifeGroup) {
    return (await this.lifeGroupService.findOneById(lifeGroup.id, { relations: ['domain'] })).domain;
  }

  @Mutation((returns) => LifeGroup)
  async createLifeGroup(@Args('title') title: string): Promise<LifeGroup> {
    return this.lifeGroupService.createLifeGroup(title);
  }

  @Mutation((returns) => LifeGroup)
  async addLifeGroupMember(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('lifeGroupId', { type: () => Int }) lifeGroupId: number,
    @Args('role') role: LifeGroupRole,
  ): Promise<LifeGroup> {
    return this.lifeGroupService.addMember(userId, lifeGroupId, role);
  }
}
