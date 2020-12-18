import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './db/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [UserModule ,
    TypeOrmModule.forFeature(
      [UserEntity],
    ),

    TypeOrmModule.forRoot(),

    AuthModule,

    AdminUsersModule,

    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}