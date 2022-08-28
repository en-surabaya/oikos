import { HttpException } from '@nestjs/common';

export class UserAlreadyActivated extends HttpException {
  constructor() {
    super('User is already activated', 409);
  }
}
