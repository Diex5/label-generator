import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

const primePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#b9d1ff',
      100: '#8bb3ff',
      200: '#5d95ff',
      300: '#2e76ff',
      400: '#0058ff',
      500: '#003CAE',
      600: '#002f89',
      700: '#002262',
      800: '#00143b',
      900: '#00143b',
      950: '#00143b',
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
      },
      dark: {
        surface: {
          0: '#ffffff',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',

        },
      },
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
    'nuxt-radash',
    '@nuxt/image',
    '@primevue/nuxt-module',
    'nuxt-i18n-micro',
  ],
  primevue: {
    options: {
      theme: {
        preset: primePreset,
        options: {
          darkModeSelector: '.dark',
        },
      },
    },
  },
  i18n: {
    locales: [
      { name: 'EN', code: 'en', iso: 'en-US', dir: 'ltr' },
      { name: 'CS', code: 'cs', iso: 'cz-CS', dir: 'ltr' },
      { name: 'DE', code: 'de', iso: 'de-DE', dir: 'ltr' },
      { name: 'ES', code: 'es', iso: 'es-ES', dir: 'ltr' },
    ],
    defaultLocale: 'cs',
    translationDir: 'locales',
    meta: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  sourcemap: {
    server: true,
    client: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'cs' },
      title: 'Label Configurator',
    },
    pageTransition: false,
    layoutTransition: false,
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    typedPages: true,
    componentIslands: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
    'primeicons/primeicons.css',

  ],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    preset: 'vercel',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  vite: {
    build: {
      target: 'esnext',
    },
  },
})
