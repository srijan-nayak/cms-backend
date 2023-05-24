import { IsHexColor, IsOptional, IsUrl, MinLength } from 'class-validator';

export class CreatePostDto {
  @MinLength(5)
  title: string;

  @MinLength(3)
  author: string;

  @IsOptional()
  @IsUrl()
  image?: string;

  @MinLength(10)
  content: string;

  @IsHexColor()
  titleColor: string;

  @IsHexColor()
  backgroundColor: string;
}
