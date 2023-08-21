import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { NestModule } from '@nestjs/common'; 
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './shared/services/prisma/prisma.module';

@Module({
  imports: [ProductsModule, OrdersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cors()).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
