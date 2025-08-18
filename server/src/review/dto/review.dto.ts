import { IsNumber, IsOptional, IsString } from "class-validator";

export class ReviewDto {
  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  rating: number;

  @IsString()
  @IsOptional()
  watchItemId: string;
}
