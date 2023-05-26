import { IsHexColor, IsOptional, IsUrl, MinLength } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @MinLength(5)
  title?: string;

  @IsOptional()
  @MinLength(3)
  author?: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @IsOptional()
  @MinLength(10)
  content?: string;

  @IsOptional()
  @IsHexColor()
  titleColor?: string;

  @IsOptional()
  @IsHexColor()
  backgroundColor?: string;
}
