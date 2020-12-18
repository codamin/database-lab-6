import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAdminDto {

    @ApiProperty({description: 'Enter Admin id > '})
    readonly id: number;

    @ApiProperty({description: 'Enter Admin Name > '})
    readonly username: string;

    @ApiProperty({description: 'Enter Admin Password > '})
    readonly password: string;
}