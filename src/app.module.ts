import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoundsModule } from './sounds/sounds.module';
import { QueriesModule } from './queries/queries.module';

@Module({
  imports: [SoundsModule, QueriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
