import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export default class CreateGenreDto {
    
    @ApiProperty({description: 'Enter Genre Name > ', minLength: 3,
    default: 'DefaultGenreName', maxLength:10})
    readonly type: string;
}