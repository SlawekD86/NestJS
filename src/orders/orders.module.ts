import { Module } from '@nestjs/common';
import { PrismaModule } from '../shared/services/prisma/prisma.module'; // Dodaj ten import
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [PrismaModule], 
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
