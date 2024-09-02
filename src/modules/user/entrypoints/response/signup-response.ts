import { ApiProperty } from "@nestjs/swagger";

export class SignUpResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;
}
