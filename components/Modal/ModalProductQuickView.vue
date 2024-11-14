<script lang="ts" setup>
const visible = ref(false)
const el = ref(null)
const { width, height } = useElementSize(el)

const canvasWidth = computed(() => width.value)
const canvasHeight = computed(() => height.value)
const showCanvas = ref(false)

watch(visible, async newVal => {
  if (newVal) {
    await nextTick()
    setTimeout(() => {
      showCanvas.value = true
    }, 1000) // Delay of 1 second
  }
  else {
    showCanvas.value = false
  }
})
</script>

<template>
  <div>
    <Button label="Náhled" w-full @click="visible = true" />
    <Dialog v-model:visible="visible" modal header="Edit Profile" mx-1rem :style="{ width: '58rem' }" h-full>
      <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
      <div grid md:grid-cols-2 grid-cols-1 gap-1rem>
        <div min-h-250px flex flex-col gap-0.5rem>
          <div ref="el" min-h-250px w="90%" h-full>
            <ClientOnly>
              <CanvasQuickView v-if="showCanvas" :width="canvasWidth" :height="canvasHeight" />
            </ClientOnly>
          </div>
          <div grid grid-cols-5 gap-12px>
            <div w-full h-50px bg-primary-500 />
            <div w-full h-50px bg-primary-500 />
            <div w-full h-50px bg-primary-500 />
            <div w-full h-50px bg-primary-500 />
          </div>
        </div>
        <div min-h-250px>
          <div w-full h-300px bg-primary-800 />
        </div>
      </div>
      <div class="flex flex-col gap-2 absolute bottom-0 left-0 w-full p-4 bg-surface-100" z-10>
        <Button type="button" w-full label="Detail produktu" variant="outlined" />
        <div flex justify-end gap-2>
          <Button type="button" label="Zrušit" severity="secondary" @click="visible = false" />
          <Button type="button" label="Přidat do košíku" @click="visible = false" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style>
</style>
