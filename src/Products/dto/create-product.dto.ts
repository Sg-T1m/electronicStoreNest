import { ApiProperty } from "@nestjs/swagger";

export class createProductDto {
    @ApiProperty({ example: 'Телефон ', description: 'Название товара' })
    Name: string;
    @ApiProperty({ example: 22.3, description: 'Цена товара' })
    Cost: number;
    @ApiProperty({ example: 'url', description: 'Ссылка на картинку' })
    img: string;
    @ApiProperty({ example: 'характеристики', description: 'размер, цвет' })
    description: string;
    @ApiProperty({ example: 1, description: 'Уникальный идентификатор категории' })
    IdCategory: number;
    @ApiProperty({ example: 'Производитель', description: 'Название компании' })
    company: string;
    @ApiProperty({ example: "Китай", description: 'Страна производитель' })
    countries: string;
    @ApiProperty({ example: "1000", description: 'Вес в граммах' })
    weight: number;
    @ApiProperty({ example: "пластик", description: 'Основной материал' })
    MainMaterial: string;
    @ApiProperty({ example: "Красный", description: 'Основной цвет' })
    Collor: string;
}