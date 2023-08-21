import { IsNotEmpty, IsInt, IsString, Length, Min } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;
}
