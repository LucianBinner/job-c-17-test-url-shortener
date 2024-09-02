import { ApiProperty } from "@nestjs/swagger";

export class SignUpRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  passwordConfirmation: string;
}
