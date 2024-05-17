import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoundsModule } from './sounds/sounds.module';

@Module({
  imports: [SoundsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
