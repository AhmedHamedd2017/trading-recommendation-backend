import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UserDto } from 'src/models/dtos/user.dto';
import { User } from 'src/models/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: CreateUserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }
}
