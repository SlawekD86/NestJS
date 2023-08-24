import { Controller, Get, Post, Delete, Put, Param, Body, NotFoundException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order, Client } from '@prisma/client'; 
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';
import { Prisma } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  async getAll(): Promise<Order[]> {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<Order | null> {
    const order = await this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  @Post('/')
  async create(@Body() orderData: CreateOrderDTO): Promise<Order> {
    const orderInput: Prisma.OrderCreateInput = {
      ...orderData,
      product: { connect: { id: orderData.productId } },
      client: { connect: { id: orderData.clientId } }, 
    };
    return this.ordersService.create(orderInput);
  }

  @Delete('/:id')
  async deleteById(@Param('id') id: string): Promise<void> {
    if (!(await this.ordersService.getById(id))) {
      throw new NotFoundException('Order not found');
    }
    await this.ordersService.deleteById(id);
  }

  @Put('/:id')
  async updateById(
    @Param('id') id: string,
    @Body() orderData: UpdateOrderDTO
  ): Promise<Order> {
    if (!(await this.ordersService.getById(id))) {
      throw new NotFoundException('Order not found');
    }
    const orderInput: Prisma.OrderUpdateInput = {
      ...orderData,
      client: { connect: { id: orderData.clientId } },
    };
    return this.ordersService.updateById(id, orderInput);
  }
}
