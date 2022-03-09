import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LifeGroup } from '../lifeGroup/lifeGroup.entity';
import { User } from '../user/user.entity';

enum LifeGroupRole {
  MEMBER = 'Member',
  LEADER = 'Leader',
}

@Entity()
@ObjectType()
export class LifeGroupMember {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.lifeGroupMembers)
  user: User;

  @ManyToOne(() => LifeGroup, (lifeGroup) => lifeGroup.lifeGroupMembers)
  lifeGroup: LifeGroup;

  @Field()
  @Column({ type: 'enum', enum: LifeGroupRole })
  role: LifeGroupRole;
}
