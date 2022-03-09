import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LifeGroup } from '../lifeGroup/lifeGroup.entity';
import { User } from '../user/user.entity';

@ObjectType()
@Entity()
export class Domain {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  address: string;

  @OneToMany(() => User, (user) => user.domain)
  users: User[];

  @OneToMany(() => LifeGroup, (lifeGroup) => lifeGroup.domain)
  lifeGroups: LifeGroup;
}
