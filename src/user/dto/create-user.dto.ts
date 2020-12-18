import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {


    @ApiProperty({description: 'Enter Book Name > ', minLength: 3,
    default: 'DefaultUserName', maxLength:20})
    readonly name: string;

    @ApiProperty({description: 'Enter Books Name > ', default: []})
    readonly books: number[];
}