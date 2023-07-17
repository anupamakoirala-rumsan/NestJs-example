import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { AccountsModule } from './accounts/accounts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, ArticlesModule, AccountsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
