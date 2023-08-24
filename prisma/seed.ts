import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    name: 'Canon EOS 50D',
    price: 2000,
    description: 'Cheap, ideal for beginners',
  },
  {
    id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
    name: 'Canon EOS 5D',
    price: 5000,
    description: 'Professional camera, solid build',
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
    name: 'Canon R',
    price: 3000,
    description: 'Professional camera, new technology',
  },
  {
    id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
    name: 'Nikon D50',
    price: 2000,
    description: 'Cheap, ideal for beginners',
  },
  {
    id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    name: 'Leica q2',
    price: 5000,
    description: 'Small, compact, innovative',
  },
];

const clients = [
  {
    id: 'xs105551-0f0d-2a9f-46b4-c559c8a17999',
    name: 'Mikolaj Kopernik',
    address: 'Hollywood',
  },
  {
    id: 'po105569-6b8d-2a8y-34c4-c559c8a14555',
    name: 'Travis Kowalski',
    address: 'New York',
  },
  {
    id: 'ui105569-2o8d-2a8y-14c4-c559c8a89444',
    name: 'Frank Champion',
    address: 'Boston',
  },
];

const orders = [
  {
    clientId: 'xs105551-0f0d-2a9f-46b4-c559c8a17999',
    productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    address: 'Hollywood',
  },
  {
    clientId: 'po105569-6b8d-2a8y-34c4-c559c8a14555',
    productId: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
    address: 'New York',
  },
  {
    clientId: 'ui105569-2o8d-2a8y-14c4-c559c8a89444',
    productId: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
    address: 'Boston',
  },
];

async function seed() {
  await prisma.product.createMany({
    data: products,
  });

  await prisma.client.createMany({
    data: clients,
  });

  await prisma.order.createMany({
    data: orders,
  });

  console.log('Seeding completed successfully.');
}

seed()
  .catch((error) => {
    console.error('Seeding failed:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
