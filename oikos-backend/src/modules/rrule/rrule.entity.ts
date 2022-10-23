import { Options } from 'rrule';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type RRuleOptions = Options;

@Entity()
export class RRuleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json' })
  options: RRuleOptions;
}
