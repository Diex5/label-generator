<script setup lang=ts>
const { isOpenedCart, totalQuantity } = storeToRefs(useCart())
const { toggleCart, addToCart } = useCart()
const { products, isLoading } = storeToRefs(useProductStore())
const { fetchProducts } = useProductStore()
onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div bg-white w-full>
    <NavigationBar />
    <div h-100vh>
      <div v-if="!isLoading" flex gap-1rem items-center>
        <div v-for="item in products" :key="item.id" class="w-full bg-red-200 p-4">
          <h2 class="text-lg font-bold">
            {{ item.name }}
          </h2>

          <div v-for="variant in item.variants" :key="variant.id" flex gap-1rem class="mt-2">
            <Button v-if="variant.quantity > 0" label="Přidat do košíku" @click="addToCart(item, variant)" />

            <p>Variant: {{ variant.name }} - {{ variant.value }} ({{ variant.price }} Kč)</p>
          </div>
        </div>
      </div>
      <HeroPage />
      <HowItWorks />
      <HeroProducts />
      {{ isOpenedCart }}
      <ModalShoppingCart />
      <Button label="Open Carwt" @click="toggleCart()" />
    </div>
  </div>
</template>
