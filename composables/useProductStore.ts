import type { Product } from '@/types'

export const useProductStore = defineStore('product', () => {
  const products = useState<Product[] | undefined>(undefined)
  const isLoading = ref(false)

  async function fetchProducts () {
    isLoading.value = true
    try {
      const res = await $fetch<Product[]>('/api/product/products', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      products.value = res
    }
    catch (e) {
      console.error(e)
      showError({
        message: 'Error fetching Products (see console for more details)',
        statusCode: 500,
        fatal: true,
      })
    }
    isLoading.value = false
  }
  useAsyncData(async () => fetchProducts())
  return {
    products,
    isLoading,
    fetchProducts,
  }
})
