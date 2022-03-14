import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EventInput } from '@fullcalendar/core';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class EventEntity {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json' })
  data: EventInput;
}
