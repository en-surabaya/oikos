import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { LifeGroup } from '../lifeGroup/lifeGroup.entity';
import { LifeGroupRole } from '../lifeGroupMember/lifeGroupMember.entity';
import { DiscipleshipJourney, LeadershipStatus, User } from './user.entity';
import { PageInfo, PageInput } from '../common/pagination/pagination.entity';

@ObjectType()
export class GqlUserLifeGroupRole {
  @Field((type) => LifeGroup)
  lifeGroup: LifeGroup;

  @Field((type) => LifeGroupRole)
  role: LifeGroupRole;
}

@ObjectType()
export class UserPaginatedResponse {
  @Field((type) => Int)
  totalCount: number;

  @Field((type) => [User])
  nodes: User[];

  @Field((type) => PageInfo)
  pageInfo: PageInfo;
}

@InputType()
export class GetAllUsersPaginatedFilterInput {
  @Field((type) => String, { nullable: true })
  name?: string;
}

@InputType()
export class GetAllUsersPaginatedInput {
  @Field((type) => GetAllUsersPaginatedFilterInput, { nullable: true })
  filter?: GetAllUsersPaginatedFilterInput;

  @Field((type) => PageInput)
  page: PageInput;
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field((type) => [LeadershipStatus])
  status: LeadershipStatus[];

  @Field((type) => [DiscipleshipJourney])
  discipleshipJourney: DiscipleshipJourney[];

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field((type) => [LeadershipStatus], { nullable: true })
  status?: LeadershipStatus[];

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;

  @Field((type) => [DiscipleshipJourney], { nullable: true })
  discipleshipJourney?: DiscipleshipJourney[];
}

@InputType()
export class ActivateUserInput {
  @Field((type) => Int)
  userId: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  activationToken: string;
}
