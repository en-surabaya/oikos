import { registerEnumType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class MentorshipEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.disciples)
  disciple: User;

  @ManyToOne(() => User, (user) => user.leaders)
  leader: User;

  @Column({ default: true })
  isActive: boolean;
}
