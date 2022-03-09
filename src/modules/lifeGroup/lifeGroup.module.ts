import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifeGroup } from './lifeGroup.entity';
import { LifeGroupResolver } from './lifeGroup.resolver';
import { LifeGroupService } from './lifeGroup.service';

@Module({
  imports: [TypeOrmModule.forFeature([LifeGroup])],
  providers: [LifeGroupService, LifeGroupResolver],
})
export class LifeGroupModule {}
