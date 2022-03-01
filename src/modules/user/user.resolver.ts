import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => [User])
  async getUsers() {
    return this.userService.getAllUser();
  }

  @Mutation((returns) => User)
  async createUser(@Args('name') name: string) {
    return this.userService.createUser(name);
  }
}
