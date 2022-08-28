import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventEntity } from './event.entity';
import { CreateEventInput } from './event.interface';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) {}
  async createEvent(data: CreateEventInput) {
    return this.eventRepository.save({
      data,
    });
  }

  async getEvents() {
    return this.eventRepository.find();
  }
}
