import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Domain } from '../domain/domain.entity';
import { LifeGroupMember } from '../lifeGroupMember/lifeGroupMember.entity';
import { GqlUserLifeGroupRole } from './user.interface';
import { MentorshipEntity } from '../mentorship/mentorship.entity';

export enum LeadershipStatus {
  CAMPUS_MISSIONARY = 'CAMPUS_MISSIONARY',
  LEADER = 'LEADER',
  INTERN = 'INTERN',
  MEMBER = 'MEMBER',
  POTENTIAL_MEMBER = 'POTENTIAL_MEMBER',
}

registerEnumType(LeadershipStatus, {
  name: 'LeadershipStatus',
});

export enum DiscipleshipJourney {
  ENGAGE = 'ENGAGE',
}

registerEnumType(DiscipleshipJourney, { name: 'DiscipleshipJourney' });

@ObjectType()
@Entity()
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field((type) => [LeadershipStatus])
  @Column({
    type: 'varchar',
    transformer: {
      to(value) {
        return JSON.stringify(value);
      },
      from(value) {
        return JSON.parse(value);
      },
    },
  })
  status: LeadershipStatus[];

  @Field((type) => [DiscipleshipJourney])
  @Column({
    type: 'varchar',
    transformer: {
      to(value) {
        return JSON.stringify(value);
      },
      from(value) {
        return JSON.parse(value);
      },
    },
  })
  discipleshipJourney: DiscipleshipJourney[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  @Column({
    type: 'date',
    nullable: true,
    transformer: {
      to(value) {
        if (!value) {
          return value;
        }
        return new Date(value);
      },
      from(value: Date) {
        if (!value) {
          return value;
        }
        return value;
      },
    },
  })
  dateOfBirth?: string;

  @OneToMany(() => MentorshipEntity, (mentorship) => mentorship.leader)
  leaders: User[];

  @OneToMany(() => MentorshipEntity, (mentorship) => mentorship.disciple)
  disciples: User[];

  @ManyToOne(() => Domain, (domain) => domain.users)
  domain: Domain;

  @OneToMany(() => LifeGroupMember, (lifeGroupMember) => lifeGroupMember.user)
  lifeGroupMembers: LifeGroupMember[];

  @Field((type) => [GqlUserLifeGroupRole])
  lifeGroups: GqlUserLifeGroupRole[];

  @Column({ default: false })
  isAccountActivated: boolean;

  @Column()
  activationToken: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  history: number;

  @CreateDateColumn()
  createdAt: Date;
}
