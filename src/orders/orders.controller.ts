import { Controller, Get, Post, Body, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';

@Controller('api/orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  getAll() {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string) {
    const order = this.ordersService.getById(id);
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  @Post()
  create(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() orderData: UpdateOrderDTO) {
    const updatedOrder = this.ordersService.updateById(id, orderData);
    if (!updatedOrder) throw new NotFoundException('Order not found');
    return updatedOrder;
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    if (!this.ordersService.getById(id)) throw new NotFoundException('Order not found');
    this.ordersService.deleteById(id);
    return { success: true };
  }
}
