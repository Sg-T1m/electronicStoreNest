import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {
   @ApiProperty({ example: "Телефоны", description: 'Название категории' })
    readonly NameCategory: string;
    @ApiProperty({ example: "url", description: 'картинка категории' })
    readonly imgCategory: string
  }