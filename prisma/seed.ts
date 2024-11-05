import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Vytvoření produktů (triček) s variantami (velikosti, barvy)

  // Basic Tričko
  const basicTShirt = await prisma.product.create({
    data: {
      name: 'Basic Tričko',
      description: 'Klasické bavlněné tričko pro každodenní nošení.',
      imageUrl: 'https://placehold.co/600x400', // Placeholder image
      variants: {
        create: [
          { name: 'Velikost', value: 'S', price: 299.99 },
          { name: 'Velikost', value: 'M', price: 299.99 },
          { name: 'Velikost', value: 'L', price: 299.99 },
          { name: 'Barva', value: 'Červená', price: 299.99 },
          { name: 'Barva', value: 'Modrá', price: 299.99 },
          { name: 'Barva', value: 'Černá', price: 299.99 },
        ],
      },
    },
  })

  // Graphic Tričko
  const graphicTShirt = await prisma.product.create({
    data: {
      name: 'Graphic Tričko',
      description: 'Tričko s grafickým potiskem pro moderní vzhled.',
      imageUrl: 'https://placehold.co/600x400', // Placeholder image
      variants: {
        create: [
          { name: 'Velikost', value: 'M', price: 349.99 },
          { name: 'Velikost', value: 'L', price: 349.99 },
          { name: 'Barva', value: 'Bílá', price: 349.99 },
          { name: 'Barva', value: 'Černá', price: 349.99 },
        ],
      },
    },
  })

  // Sportovní Tričko
  const sportTShirt = await prisma.product.create({
    data: {
      name: 'Sportovní Tričko',
      description: 'Tričko ideální pro sportovní aktivity, vyrobené z prodyšného materiálu.',
      imageUrl: 'https://placehold.co/600x400', // Placeholder image
      variants: {
        create: [
          { name: 'Velikost', value: 'M', price: 399.99 },
          { name: 'Velikost', value: 'L', price: 399.99 },
          { name: 'Barva', value: 'Zelená', price: 399.99 },
          { name: 'Barva', value: 'Modrá', price: 399.99 },
        ],
      },
    },
  })

  console.log('T-shirts created:', { basicTShirt, graphicTShirt, sportTShirt })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
