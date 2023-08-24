import { Controller, Get, Param, ParseUUIDPipe, NotFoundException, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll(): Promise<Product[]> {
    return await this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Product | null> {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');
    await this.productsService.deleteById(id);
  }
}
