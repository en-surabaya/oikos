import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { DuplicateMentor } from './errors/duplicateMentor.error';
import { MentorshipEntity } from './mentorship.entity';

@Injectable()
export class MentorshipService {
  constructor(
    @InjectRepository(MentorshipEntity)
    private readonly mentorshipRepository: Repository<MentorshipEntity>,
  ) {}

  async attachDisciple(leader: User, disciple: User): Promise<MentorshipEntity> {
    const existing = await this.mentorshipRepository.find({
      where: {
        leader,
        disciple,
      },
    });
    if (existing.length !== 0) {
      throw new DuplicateMentor(leader, disciple);
    }
    return this.mentorshipRepository.save({
      leader,
      disciple,
    });
  }

  async getLeaders(user: User): Promise<User[]> {
    const leaders = await this.mentorshipRepository.find({
      where: {
        disciple: user,
      },
      relations: ['leader'],
    });

    return leaders.map((entity) => {
      return entity.leader;
    });
  }

  async getDisciples(user: User): Promise<User[]> {
    const disciples = await this.mentorshipRepository.find({
      where: {
        leader: user,
      },
      relations: ['disciple'],
    });

    return disciples.map((entity) => {
      return entity.disciple;
    });
  }
}
