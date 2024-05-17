import { Module } from '@nestjs/common';
import { SoundsService } from './sounds.service';
import { SoundsController } from './sounds.controller';

@Module({
  controllers: [SoundsController],
  providers: [SoundsService],
})
export class SoundsModule {}
