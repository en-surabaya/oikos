import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class JWT {
  @Field()
  access_token: string;
}
