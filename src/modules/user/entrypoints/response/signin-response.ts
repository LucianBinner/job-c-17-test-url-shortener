import { ApiProperty } from "@nestjs/swagger";

export class SignInResponse {
  @ApiProperty()
  token: string;
}
