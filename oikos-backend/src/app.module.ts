import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { DomainModule } from './modules/domain/domain.module';
import { LifeGroupModule } from './modules/lifeGroup/lifeGroup.module';
import { LifeGroupMemberModule } from './modules/lifeGroupMember/lifeGroupMember.module';
import { EventModule } from './modules/event/event.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
    DomainModule,
    LifeGroupModule,
    LifeGroupMemberModule,
    EventModule,
  ],
})
export class AppModule {}
