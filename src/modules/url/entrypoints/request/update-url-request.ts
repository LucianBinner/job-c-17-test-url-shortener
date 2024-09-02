import { ApiProperty } from "@nestjs/swagger";

export class UpdateURLResponse {
  @ApiProperty()
  urlOrigin: string;
}
