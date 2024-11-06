import { useToggle } from '@vueuse/core'

export const useCart = defineStore('cart', () => {
  const [isOpenedCard, toggleCart] = useToggle()

  return {
    isOpenedCard,
    toggleCart,
  }
})
