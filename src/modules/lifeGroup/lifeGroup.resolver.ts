import { Query, Resolver } from '@nestjs/graphql';
import { LifeGroup } from './lifeGroup.entity';
import { LifeGroupService } from './lifeGroup.service';

@Resolver((of) => LifeGroup)
export class LifeGroupResolver {
  constructor(private readonly lifeGroupService: LifeGroupService) {}

  @Query((returns) => [LifeGroup])
  async getLifeGroups(): Promise<LifeGroup[]> {
    return this.lifeGroupService.getLifeGroups();
  }
}
