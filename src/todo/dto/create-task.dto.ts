import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateTaskDto {

    @ApiProperty({description: 'Enter Task Name > '})
    readonly name: string;

    @ApiProperty({description: 'Enter Array of Category IDs > ',
    default: []})
    readonly categoryIDs: number[];

    @ApiProperty({description: 'Enter Array of Category IDs > ',
    default: []})
    readonly text: string;

    @ApiProperty({description: 'Enter Array of Tag IDs > ',
    default: []})
    readonly tagIDs: number[];

    @ApiProperty({description: 'Enter Array of Item IDs > ',
    default: []})
    readonly itemIDs: number[];
}
