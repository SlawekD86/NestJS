import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { db, Order } from './../db';
import { UpdateOrderDTO } from './dtos/update-order.dto';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
  public getAll(): Order[] {
    return db.orders;
  }

  public getById(id: Order['id']): Order | null {
    return db.orders.find((p) => p.id === id);
  }

  public deleteById(id: Order['id']): void {
    db.orders = db.orders.filter((p) => p.id !== id);
  }

  public create(orderData: CreateOrderDTO): Order {
    const newOrder = { ...orderData, id: uuidv4() };
    db.orders.push(newOrder);
    return newOrder;
  }

  public updateById(id: Order['id'], orderData: UpdateOrderDTO): Order | null {
    const index = db.orders.findIndex((o) => o.id === id);
    if (index !== -1) {
      const updatedOrder = { ...db.orders[index], ...orderData };
      db.orders[index] = updatedOrder;
      return updatedOrder;
    }
    return null;
  }
}
