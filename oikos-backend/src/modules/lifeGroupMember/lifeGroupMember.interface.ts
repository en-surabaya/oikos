import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { LifeGroupRole } from './lifeGroupMember.entity';

@ObjectType()
export class GqlLifeGroupMember {
  @Field((type) => User)
  user: User;

  @Field((type) => LifeGroupRole)
  role: LifeGroupRole;
}
