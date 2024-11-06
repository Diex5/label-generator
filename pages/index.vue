<script setup lang=ts>
const { isOpenedCard } = storeToRefs(useCart())
const { toggleCart } = useCart()
</script>

<template>
  <div>
    {{ isOpenedCard }}
    <ModalShoppingCart />
    <Button
      label="Open Carwt"

      @click="toggleCart()"
    />
  </div>
</template>
