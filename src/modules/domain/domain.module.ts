import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Domain } from './domain.entity';
import { DomainResolver } from './domain.resolver';
import { DomainService } from './domain.service';

@Module({
  imports: [TypeOrmModule.forFeature([Domain])],
  providers: [DomainService, DomainResolver],
})
export class DomainModule {}
