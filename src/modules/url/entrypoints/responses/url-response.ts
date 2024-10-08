import { ApiProperty } from "@nestjs/swagger";

export class URLResponse {
  @ApiProperty()
  urlId: number;

  @ApiProperty()
  urlOrigin: string;

  @ApiProperty()
  urlShortener: string;

  @ApiProperty()
  clicks?: number;
}
