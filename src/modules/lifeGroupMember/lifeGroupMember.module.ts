import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifeGroupMember } from './lifeGroupMember.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LifeGroupMember])],
})
export class LifeGroupMemberModule {}
