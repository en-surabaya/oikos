import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/helper/gql-auth.guard';
import { CurrentUser } from '../auth/helper/gqlContext';
import { Domain } from '../domain/domain.entity';
import { User } from './user.entity';
import { ActivateUserInput, CreateUserInput } from './user.interface';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async getUsers() {
    return this.userService.getAllUser();
  }

  @Query((returns) => [User])
  @UseGuards(GqlAuthGuard)
  async getUsersProtected() {
    return this.userService.getAllUser();
  }

  @ResolveField((returns) => Domain, { nullable: true })
  async domain(@Parent() user: User) {
    return (await this.userService.findOneById(user.id, { relations: ['domain'] })).domain;
  }

  @ResolveField((returns) => [User])
  async leaders(@Parent() user: User) {
    return (await this.userService.findOneById(user.id, { relations: ['leaders'] })).leaders;
  }

  @ResolveField((returns) => [User])
  async disciples(@Parent() user: User) {
    return (await this.userService.findOneById(user.id, { relations: ['disciples'] })).disciples;
  }

  @Mutation((returns) => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.createUser(input);
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
