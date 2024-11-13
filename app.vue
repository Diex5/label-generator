<script setup lang="ts">
const route = useRoute()

useHead({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Configurator` : 'Configurator'),
})
</script>

<template>
  <NuxtLayout>
    <div bg-white>
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
* {
  @apply bg-gray-800;
}
</style>
