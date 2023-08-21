import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async getById(id: string): Promise<Product | null> {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  async deleteById(id: string): Promise<Product> {
    return this.prismaService.product.delete({
      where: { id },
    });
  }
}
