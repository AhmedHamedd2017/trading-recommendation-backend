import { Body, Controller, Post } from '@nestjs/common';
import { CreationResponseDto } from 'src/models/dtos/base.dto';
import { CreateUserDto } from 'src/models/dtos/user.dto';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<CreationResponseDto> {
    const insertedUser = await this.userService.createUser(user);

    return { inserted: !!insertedUser.id };
  }
}
