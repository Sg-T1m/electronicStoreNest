import { ApiProperty } from "@nestjs/swagger";

export class GetProductByCategory {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор категории' })
    readonly id: number;
  }