import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
  getRepository,
} from 'typeorm';
import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Domain } from '../domain/domain.entity';
import { LifeGroupMember } from '../lifeGroupMember/lifeGroupMember.entity';
import { GqlUserLifeGroupRole } from './user.interface';

export enum LeadershipStatus {
  CAMPUS_MISSIONARY = 'CampusMissionary',
  LEADER = 'Leader',
  INTERN = 'Intern',
  MEMBER = 'Member',
  POTENTIAL_MEMBER = 'PotentialMember',
}

registerEnumType(LeadershipStatus, {
  name: 'LeadershipStatus',
});

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

  @Field({ nullable: true })
  @Column({ nullable: true })
  username?: string;

  @Column({ nullable: true })
  password?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
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

  // async getDomain(refresh: boolean = true) {
  //   if (refresh || !this.domain) {
  //     this.domain = await getRepository(Domain).findOne({
  //       where: {

  //       }
  //     })
  //   }
  // }
}
