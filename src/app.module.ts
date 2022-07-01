import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WordModule } from './word/word.module';
import { UserController } from './user/user.controller';

@Module({
  imports: [WordModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
