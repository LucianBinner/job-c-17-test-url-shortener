import { ApiProperty } from "@nestjs/swagger";

export class SaveURLResponse {
  @ApiProperty()
  urlOrigin: string;
}
