import { HttpException } from '@nestjs/common';

export class DuplicateUsernameError extends HttpException {
  constructor() {
    super('Username already taken', 409);
  }
}
