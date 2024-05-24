import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoundsModule } from './sounds/sounds.module';
import { QueriesModule } from './queries/queries.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [SoundsModule, QueriesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
