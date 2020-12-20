import { Injectable } from '@nestjs/common';
import UserEntity from '../db/entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import {getConnection} from "typeorm";

@Injectable()
export class UserService {

  async insert(userDetails: CreateUserDto): Promise<UserEntity> {
    const userEntity: UserEntity = UserEntity.create();
    const {name } = userDetails;
    userEntity.name = name;

    await UserEntity.save(userEntity);
    return userEntity;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await UserEntity.find();
  }
}