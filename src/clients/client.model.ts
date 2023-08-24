import { Prisma } from '@prisma/client';

export class Client {
  id: string;
  name: string;
  address: string;
  orders?: Prisma.OrderCreateNestedManyWithoutClientInput;
}