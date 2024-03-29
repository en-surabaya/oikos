import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DomainModule } from '../domain/domain.module';
import { LifeGroupMemberModule } from '../lifeGroupMember/lifeGroupMember.module';
import { MentorshipModule } from '../mentorship/mentorship.module';
import { PaginationModule } from '../common/pagination/pagination.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), DomainModule, LifeGroupMemberModule, MentorshipModule, PaginationModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
