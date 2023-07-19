import { ApiProperty } from '@nestjs/swagger';

export class CreateAccountDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  balance: number;
}
