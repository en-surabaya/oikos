import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Page {
  @Field((type) => Int)
  skip: number;

  @Field((type) => Int)
  take: number;
}

@InputType()
export class PageInput {
  @Field((type) => Int)
  skip: number;

  @Field((type) => Int)
  take: number;
}

export class PaginatedParameter<Filter> {
  filter?: Filter;
  page: Page;
}

@ObjectType()
export class PageInfo {
  @Field((type) => Page, { nullable: true })
  prevPage?: Page;

  @Field((type) => Page, { nullable: true })
  nextPage?: Page;
}

export class PaginatedResponse<Entity> {
  totalCount: number;
  nodes: Entity[];
  pageInfo: PageInfo;
}
