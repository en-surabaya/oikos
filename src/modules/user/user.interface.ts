import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { LifeGroup } from '../lifeGroup/lifeGroup.entity';
import { LifeGroupRole } from '../lifeGroupMember/lifeGroupMember.entity';
import { DiscipleshipJourney, LeadershipStatus } from './user.entity';

@ObjectType()
export class GqlUserLifeGroupRole {
  @Field((type) => LifeGroup)
  lifeGroup: LifeGroup;

  @Field((type) => LifeGroupRole)
  role: LifeGroupRole;
}

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field((type) => LeadershipStatus)
  status: LeadershipStatus;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  date_of_birth?: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  name?: string;

  @Field((type) => LeadershipStatus, { nullable: true })
  status?: LeadershipStatus;

  @Field({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  date_of_birth?: string;

  @Field((type) => DiscipleshipJourney, { nullable: true })
  discipleshipJourney?: DiscipleshipJourney;
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
