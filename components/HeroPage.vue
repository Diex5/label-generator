<template>
  <div class="flex lg:flex-row flex-col gap-4 bg-surface-0 h-70vh ">
    <div class="flex-1 flex items-center justify-center app-container ">
      <div class="p-6 pt-12 lg:p-12 max-w-600px mx-auto">
        <h1 class="text-3xl lg:text-5xl font-bold text-surface-900  mb-4 lg:leading-normal text-center lg:text-left">
          Vyjádři svou kreativitu <br><span class="text-primary-500 "> na tričku!</span>
        </h1>
        <p class="text-surface-700  leading-normal mb-8 text-center lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="flex items-center justify-center lg:justify-start gap-6">
          <Button
            label="Vytvořit tričko"
            type="button"
          />
          <Button
            label="Jak to funguje ?"
            variant="text"
          />
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-hidde bg-surface-900">
      <img
        src="https://cdn.leonardo.ai/users/8a370e31-e49a-418b-9141-4b42e714c922/generations/96767b17-aa1b-478d-9b58-598a635b7e02/Leonardo_Lightning_XL_landing_page_with_3d_t_shirt_configurati_3.jpg?w=512"
        alt="hero-1"
        class="h-full w-full object-cover lg:[clip-path:polygon(12%_0,100%_0%,100%_100%,0_100%)]"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
