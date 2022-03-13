import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MentorshipEntity } from './mentorship.entity';
import { MentorshipService } from './mentorship.service';

@Module({
  imports: [TypeOrmModule.forFeature([MentorshipEntity])],
  providers: [MentorshipService],
  exports: [MentorshipService],
})
export class MentorshipModule {}
