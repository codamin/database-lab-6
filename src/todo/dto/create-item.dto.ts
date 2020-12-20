import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateItemDto {

    @ApiProperty({description: 'Enter Item Name > '})
    readonly name: string;

    @ApiProperty({description: 'Enter task ID > ',
    default: []})
    readonly taskId: number;
}