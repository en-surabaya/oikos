import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifeGroupMemberModule } from '../lifeGroupMember/lifeGroupMember.module';
import { UserModule } from '../user/user.module';
import { LifeGroup } from './lifeGroup.entity';
import { LifeGroupResolver } from './lifeGroup.resolver';
import { LifeGroupService } from './lifeGroup.service';

@Module({
  imports: [TypeOrmModule.forFeature([LifeGroup]), UserModule, LifeGroupMemberModule],
  providers: [LifeGroupService, LifeGroupResolver],
  exports: [LifeGroupService],
})
export class LifeGroupModule {}
