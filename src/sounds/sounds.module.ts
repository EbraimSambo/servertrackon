import { Module } from '@nestjs/common';
import { SoundsService } from './sounds.service';
import { SoundsController } from './sounds.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [SoundsController],
  providers: [SoundsService, JwtService],
})
export class SoundsModule {}
