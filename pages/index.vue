<script setup lang=ts>
import type { Product } from '@/types'

const { isOpenedCart } = storeToRefs(useCart())
const { toggleCart } = useCart()
const { products, isLoading } = storeToRefs(useProductStore())
const { fetchProducts } = useProductStore()

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div
    bg-white
    w-full
  >
    <NavigationBar />
    {{ products }}
    <div h-100vh>
      <HeroPage />
      <HowItWorks />
      <HeroProducts />
      {{ isOpenedCart }}
      <ModalShoppingCart />
      <Button
        label="Open Carwt"
        @click="toggleCart()"
      />
    </div>
  </div>
</template>
