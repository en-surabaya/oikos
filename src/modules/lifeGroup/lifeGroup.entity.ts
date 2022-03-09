import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Domain } from '../domain/domain.entity';
import { LifeGroupMember } from '../lifeGroupMember/lifeGroupMember.entity';

@Entity()
@ObjectType()
export class LifeGroup {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Field()
  title: string;

  @OneToMany(() => LifeGroupMember, (lifeGroupMember) => lifeGroupMember.lifeGroup)
  lifeGroupMembers: LifeGroupMember[];

  @ManyToOne(() => Domain, (domain) => domain.lifeGroups)
  domain: Domain;
}
