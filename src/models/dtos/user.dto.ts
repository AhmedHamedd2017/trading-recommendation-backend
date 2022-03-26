export class UserDto {
  id: string;

  email: string;

  password: string;

  role: string;
}

export class CreateUserDto {
  email: string;

  password: string;

  role: string;
}
