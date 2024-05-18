import { Module } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { QueriesController } from './queries.controller';

@Module({
  providers: [QueriesService],
  controllers: [QueriesController]
})
export class QueriesModule {}
