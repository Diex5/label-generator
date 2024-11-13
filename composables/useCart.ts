import { useToggle } from '@vueuse/core'

export const useCart = defineStore('cart', () => {
  const [isOpenedCart, toggleCart] = useToggle()

  return {
    isOpenedCart,
    toggleCart,
  }
})
