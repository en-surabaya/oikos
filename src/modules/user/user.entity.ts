import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne, OneToMany } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Domain } from '../domain/domain.entity';
import { LifeGroupMember } from '../lifeGroupMember/lifeGroupMember.entity';

enum LeadershipStatus {
  CAMPUS_MISSIONARY = 'CampusMissionary',
  LEADER = 'Leader',
  INTERN = 'Intern',
  MEMBER = 'Member',
}

@ObjectType()
@Entity()
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column({ type: 'enum', enum: LeadershipStatus })
  status: LeadershipStatus;

  @Field()
  @Column({ nullable: true })
  username?: string;

  @Column({ nullable: true })
  password?: string;

  @Field()
  @Column({ nullable: true })
  email?: string;

  @Field()
  @Column({ nullable: true })
  phone?: string;

  @Field()
  @Column({
    type: 'date',
    nullable: true,
  })
  date_of_birth?: string;

  @ManyToMany(() => User, (user) => user.leaders)
  disciples: User[];

  @ManyToMany(() => User, (user) => user.disciples)
  @JoinTable()
  leaders: User[];

  @ManyToOne(() => Domain, (domain) => domain.users)
  domain: Domain;

  @OneToMany(() => LifeGroupMember, (lifeGroupMember) => lifeGroupMember.user)
  lifeGroupMembers: LifeGroupMember[];

  @Column({ default: false })
  isAccountActivated: boolean;

  @Column()
  activationToken: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  history: number;
}
