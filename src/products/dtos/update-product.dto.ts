import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateProductDTO {
  @IsNotEmpty()
  @Length(1, 255)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => (Array.isArray(value) ? value.join(', ') : value))
  description: string;
}
