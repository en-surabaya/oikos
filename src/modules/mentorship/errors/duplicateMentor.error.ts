import { HttpException } from '@nestjs/common';
import { User } from 'src/modules/user/user.entity';

export class DuplicateMentor extends HttpException {
  constructor(leader: User, disciple: User) {
    super(`${disciple.name} is already discipled by ${leader.name}`, 409);
  }
}
