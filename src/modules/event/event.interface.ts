import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';

@InputType()
export class CreateEventInput {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  groupId?: string;

  @Field({ defaultValue: false })
  allDay: boolean;

  @Field((type) => GraphQLISODateTime)
  start: Date;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  end?: Date;

  @Field()
  title: string;

  @Field({ nullable: true })
  url?: string;
}
