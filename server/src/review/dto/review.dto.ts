import { IsEmail, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class ReviewDto {
  @IsString()
  @IsOptional()
  content?: string;

  @IsNumber()
  @IsOptional()
  rating: number;
}
