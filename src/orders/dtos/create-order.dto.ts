import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsString()
  clientId: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  productId: string;
}
