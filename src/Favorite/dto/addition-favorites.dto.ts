import { ApiProperty } from "@nestjs/swagger";

export class AdditionFavoritesDto {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор пользователя' })
  readonly userId: number;
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор товары' })
  readonly productId: number;
}