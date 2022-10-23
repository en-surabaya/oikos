import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifeGroupMember } from './lifeGroupMember.entity';
import { LifeGroupMemberService } from './lifeGroupMember.service';

@Module({
  imports: [TypeOrmModule.forFeature([LifeGroupMember])],
  providers: [LifeGroupMemberService],
  exports: [LifeGroupMemberService],
})
export class LifeGroupMemberModule {}
