import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
    @ApiProperty({ example: 'ivan335', description: 'Уникальный логин' })
    login: string;
    @ApiProperty({ example: '1245', description: 'пароль' })
    password: string;
}