import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PaginatedResponse } from '../common/pagination/pagination.entity';
import { Domain } from '../domain/domain.entity';
import { User } from './user.entity';
import {
  ActivateUserInput,
  CreateUserInput,
  GetAllUsersPaginatedInput,
  GqlUserLifeGroupRole,
  UpdateUserInput,
  UserPaginatedResponse,
} from './user.interface';
import { UserService } from './user.service';

@Resolver((of) => User)
// @UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async getUsers() {
    return this.userService.getAllUser();
  }

  @Query((returns) => UserPaginatedResponse)
  async getAllUsersPaginated(@Args('input') input: GetAllUsersPaginatedInput) {
    return this.userService.getAllUsersPaginated(input);
  }

  @ResolveField((returns) => Domain, { nullable: true })
  async domain(@Parent() user: User) {
    return (await this.userService.findOneById(user.id, { relations: ['domain'] })).domain;
  }

  @ResolveField((returns) => [User])
  async leaders(@Parent() user: User) {
    return this.userService.getLeaders(user);
  }

  @ResolveField((returns) => [User])
  async disciples(@Parent() user: User) {
    return this.userService.getDisciples(user);
  }

  @ResolveField((returns) => [GqlUserLifeGroupRole])
  async lifeGroups(@Parent() user: User) {
    return await this.userService.getLifeGroups(user);
  }

  @Mutation((returns) => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.createUser(input);
  }

  @Mutation((returns) => User)
  async updateUser(@Args('userId', { type: () => Int }) userId: number, @Args('input') input: UpdateUserInput) {
    return this.userService.updateUser(userId, input);
  }

  @Mutation((returns) => User)
  async activateUser(@Args('input') input: ActivateUserInput) {
    return this.userService.activateUser(input);
  }

  @Mutation((returns) => User)
  async attachDisciple(
    @Args('leaderId', { type: () => Int }) leaderId: number,
    @Args('discipleId', { type: () => Int }) discipleId: number,
  ) {
    return this.userService.attachDisciple(leaderId, discipleId);
  }
}
