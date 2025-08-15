import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class WatchItemDto {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  director: string;

  @IsNumber()
  @IsOptional()
  releaseYear: number;

  @IsBoolean()
  @IsOptional()
  isWatched: boolean;

  @IsString()
  @IsOptional()
  createdAt?: string;
}
