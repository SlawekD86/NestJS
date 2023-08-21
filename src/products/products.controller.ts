import { Controller, Get, Param, ParseUUIDPipe, NotFoundException, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getAll() {
    return await this.productsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  @Delete('/:id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    const product = await this.productsService.getById(id);
    if (!product) throw new NotFoundException('Product not found');
    await this.productsService.deleteById(id);
    return { success: true };
  }
}
