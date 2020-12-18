import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export default class CreateBookDto {

    @ApiProperty({description: 'Enter Book Name > ', minLength: 3,
    default: 'DefaultBookName', maxLength:20})
    readonly name: string;

    @ApiProperty({description: 'Enter User ID > ', minLength: 8,
    default: 'DefaultUserID', maxLength:12})
    readonly userID: number;

    @ApiProperty({description: 'Enter Array of Genre IDs > ',
    default: []})
    readonly genreIDs: number[];
}