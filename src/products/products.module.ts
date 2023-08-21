import { Module } from '@nestjs/common';
import { PrismaModule } from '../shared/services/prisma/prisma.module'; // Dodaj ten import
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [PrismaModule], 
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}