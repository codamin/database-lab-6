import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTagDto {

    @ApiProperty({description: 'Enter Tag Name > '})
    readonly name: string;
}
