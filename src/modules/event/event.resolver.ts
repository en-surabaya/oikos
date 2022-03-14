import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { EventEntity } from './event.entity';
import { CreateEventInput } from './event.interface';
import { EventService } from './event.service';

@Resolver((of) => EventEntity)
export class EventResolver {
  constructor(private readonly eventService: EventService) {}

  @Mutation((returns) => EventEntity)
  async createEvent(@Args('input') input: CreateEventInput) {
    return this.eventService.createEvent(input);
  }
}
