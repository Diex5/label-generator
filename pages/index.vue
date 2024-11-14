<script setup lang=ts>
const { isOpenedCart } = storeToRefs(useCart())
const { toggleCart } = useCart()
</script>

<template>
  <div
    bg-white
    w-full
  >
    <NavigationBar />
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
