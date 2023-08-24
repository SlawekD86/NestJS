import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma/prisma.service';
import { Order, Client } from '@prisma/client'; 
import { Prisma } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  async getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  async getById(id: string): Promise<Order | null> {
    return this.prismaService.order.findUnique({
      where: { id },
    });
  }

  async create(orderData: Prisma.OrderCreateInput): Promise<Order> {
    return this.prismaService.order.create({
      data: orderData,
    });
  }

  async deleteById(id: string): Promise<Order | null> {
    return this.prismaService.order.delete({
      where: { id },
    });
  }

  async updateById(
    id: string,
    orderData: Prisma.OrderUpdateInput
  ): Promise<Order | null> {
    return this.prismaService.order.update({
      where: { id },
      data: orderData,
    });
  }
}
