import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateCategoryDto {

    @ApiProperty({description: 'Enter Category Name > '})
    readonly name: string;
}
