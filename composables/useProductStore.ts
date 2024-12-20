import type { Product } from '@/types'

export const useProductStore = defineStore('product', () => {
  const products = useState<Product[]>('products', () => []) // Inicializace jako prázdné pole
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
        message: 'Error fetching products (see console for more details)',
        statusCode: 500,
        fatal: true,
      })
    }
    finally {
      isLoading.value = false
    }
  }

  // Načtení dat při prvotním načtení stránky
  useAsyncData(() => fetchProducts())

  return {
    products,
    isLoading,
    fetchProducts,
  }
})
