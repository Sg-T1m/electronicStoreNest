import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'Иван', description: 'Имя' })
    Name: string;
    @ApiProperty({ example: 'Иванов', description: 'Фамилия' })
    SName: string;
    @ApiProperty({ example: 'Иванович', description: 'Отчество' })
    Patronymic: string;
    @ApiProperty({ example: 'url', description: 'картинка' })
    img: string;
    @ApiProperty({example: 'ivan335', description: 'Уникальный логин'})
    login: string;
    @ApiProperty({example: '1245', description: 'пароль'})
    password: string;
}