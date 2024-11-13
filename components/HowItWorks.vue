<template>
  <div class="overflow-hidden bg-surface-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-base/7 font-semibold text-indigo-600">
              Vytvoř si unikátní design
            </h2>
            <p class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-surface-100 sm:text-5xl">
              Jak to funguje?
            </p>
            <p class="mt-6 text-lg/8 text-surface-300">
              Vytvoř si vlastní potisk na tričko jednoduše – nahraj svůj design nebo si vyber z našich moderních šablon. Tvoje tričko, Tvoje volba.
            </p>
            <dl class="mt-10 max-w-xl space-y-8 text-lg/7 text-surface-600 lg:max-w-none">
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-surface-100">
                  <UnoIcon
                    :is="feature.icon"
                    class="absolute left-1 top-1 size-5 text-indigo-600"
                    :class="feature.icon"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline text-surface-300">
                  {{ feature.description }}
                </dd>
              </div>
            </dl>
          </div>
          <Button
            mt-4rem
            label="Vyber si tričko"
            w-full
          />
        </div>
        <div class="flex items-start justify-end lg:order-first">
          <img
            src="https://cdn.leonardo.ai/users/8a370e31-e49a-418b-9141-4b42e714c922/generations/73a59c58-a436-4a1c-af7f-2c29878b3eeb/Leonardo_Lightning_XL_Create_a_vibrant_and_engaging_landing_pa_2.jpg"
            alt="Product screenshot"
            class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-surface-400/10 sm:w-[67rem]"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    name: 'Snadné nahrání designu.',
    description:
      'Jednoduše nahraj svůj vlastní design a my ho přeneseme na tričko přesně podle tvých představ.',
    icon: 'pi pi-upload',
  },
  {
    name: 'Moderní šablony.',
    description: 'Vyber si z našich stylových šablon a uprav si je podle svého. Rychle, jednoduše, kreativně.',
    icon: 'pi pi-images',
  },
  {
    name: 'Úprava umístění potisku.',
    description: 'Přetáhni potisk kamkoli na tričko. Máš plnou kontrolu nad umístěním a velikostí.',
    icon: 'pi pi-arrows-alt',
  },
]
</script>
