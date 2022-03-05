import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/helper/gql-auth.guard';
import { CurrentUser } from '../auth/helper/gqlContext';
import { User } from './user.entity';
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

  @Mutation((returns) => User)
  async createUser(@Args('name') name: string, @Args('username') username: string, @Args('password') password: string) {
    return this.userService.createUser(name, username, password);
  }
}
