import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JWT } from './auth.entity';
import { AuthService } from './auth.service';
import { GqlRequest } from './helper/gqlContext';
import { LocalAuthGuard } from './helper/local.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Mutation((returns) => JWT)
  @UseGuards(LocalAuthGuard)
  async login(@Args('username') username: string, @Args('password') password: string) {
    return this.authService.login(await this.userService.findOne(username));
  }
}
