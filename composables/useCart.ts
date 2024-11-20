import { defineStore } from 'pinia'
import { useToggle } from '@vueuse/core'
import type { Product, Variant, OrderItem } from '@/types'

export const useCart = defineStore('cart', () => {
  const [isOpenedCart, toggleCart] = useToggle(false)

  // State
  const cartItems = ref<OrderItem[]>([])

  // Getters
  const totalQuantity = computed(() =>
    cartItems.value.reduce((total, item) => total + item.quantity, 0),
  )

  const totalPrice = computed(() =>
    cartItems.value.reduce((total, item) => total + item.totalPrice, 0),
  )

  // Actions
  const addToCart = (product: Product, variant: Variant, quantity: number = 1) => {
    const existingItem = cartItems.value.find(
      item => item.productId === product.id && item.variantId === variant.id,
    )

    if (existingItem) {
      existingItem.quantity += quantity
      existingItem.totalPrice += variant.price * quantity
    }
    else {
      cartItems.value.push({
        id: Math.random(), // Dočasné ID, v produkci se nahradí ID z backendu
        orderId: 0, // Prozatím není přiřazen žádné objednávce
        productId: product.id,
        variantId: variant.id,
        quantity,
        unitPrice: variant.price,
        totalPrice: variant.price * quantity,
        order: null,
        product,
        variant,
      })
      toggleCart()
    }
  }

  const removeFromCart = (productId: number, variantId: number) => {
    cartItems.value = cartItems.value.filter(
      item => !(item.productId === productId && item.variantId === variantId),
    )
  }

  const updateQuantity = (productId: number, variantId: number, quantity: number) => {
    const item = cartItems.value.find(
      item => item.productId === productId && item.variantId === variantId,
    )

    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId, variantId)
      }
      else {
        item.quantity = quantity
        item.totalPrice = item.unitPrice * quantity
      }
    }
  }

  const clearCart = () => {
    cartItems.value = []
  }

  return {
    // State
    isOpenedCart,
    cartItems,

    // Getters
    totalQuantity,
    totalPrice,

    // Actions
    toggleCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
})
