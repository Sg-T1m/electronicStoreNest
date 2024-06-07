import { ApiProperty } from "@nestjs/swagger";

export class CreateRolesDto{
    @ApiProperty({ example: 'User', description: 'Название роли' })
    NameRole: string
}    