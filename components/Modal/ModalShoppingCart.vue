<script setup lang=ts>
const { isOpenedCart, cartItems, totalPrice } = storeToRefs(useCart())
const { removeFromCart } = useCart()
const { toggleCart } = useCart()
</script>

<template>
  <!-- TODO animace kosiku pri vstupu neni -->
  <HeadlessTransitionRoot as="template" :show="isOpenedCart">
    <HeadlessDialog class="relative z-10" @close="isOpenedCart = false">
      <HeadlessTransitionChild
        as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
        enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 HeadlessTransition-opacity" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <HeadlessTransitionChild
              as="template"
              enter="transform HeadlessTransition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transform HeadlessTransition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <HeadlessDialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <HeadlessDialogTitle class="text-lg font-medium text-gray-900">
                        Shopping cart
                      </HeadlessDialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button
                          type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          @click="isOpenedCart = false"
                        >
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <UnoIcon class="pi pi-times h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        ` <transition-group
                          name="list" tag="ul" min-h-300px w-full role="list"
                          class="-my-6 divide-y divide-gray-200"
                        >
                          <li v-for="cart in cartItems" :key="cart.id" class="flex py-6">
                            <div class="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img :src="cart.product.image" class="h-full w-full object-cover object-center">
                            </div>

                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a :href="cart.product.slug">{{ cart.product.name }}</a>
                                  </h3>
                                  <p class="ml-4">
                                    {{ cart.variant.price }}
                                  </p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">
                                  {{ cart.variant.name }}
                                </p>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">
                                  Qty {{ cart.quantity }}
                                </p>

                                <div class="flex">
                                  <button
                                    type="button" class="font-medium text-indigo-600 hover:text-indigo-500"
                                    @click="removeFromCart(cart.productId, cart.variantId)"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </transition-group>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{{ totalPrice }}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div class="mt-6">
                      <I18nLink to="#">
                        <Button v-ripple w-full label="Zaplatit" size="" />
                      </I18nLink>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500" w-full>
                      <p w-full flex flex-col gap-4px>
                        nebo{{ ' ' }}

                        <Button label="Pokračovat v nákupu" variant="text" w-full @click="toggleCart()" />
                      </p>
                    </div>
                  </div>
                </div>
              </HeadlessDialogPanel>
            </HeadlessTransitionChild>
          </div>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  width: 100%;
}

.list-move {
  transition: transform 0.5s ease;
}
</style>
