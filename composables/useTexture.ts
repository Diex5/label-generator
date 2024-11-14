export const useTexture = defineStore('useTexture', () => {
  const canvasTexture = ref<string | null>(null)
  const canvas = ref<HTMLCanvasElement | null>(null)

  return {
    canvasTexture,
    canvas,
  }
})
