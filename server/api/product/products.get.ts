import prisma from '~/lib/prisma'
import type { Product } from '@/types'

export default defineEventHandler(async event => {
  try {
    const products = await prisma.product.findMany({
      include: {
        variants: true,
      },
    })
    return JSON.stringify(products, null, 2)
  }
  catch (e) {
    console.error(e)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch products' }),
    }
  }
})
