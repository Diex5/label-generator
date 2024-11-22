import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
import { themeColors } from './unocss.config.js'

const primePreset = definePreset(Aura, {
  semantic: {
    primary: themeColors.primary,
    colorScheme: {
      light: {
        surface: themeColors.surface,
      },
      dark: {
        surface: themeColors.surface,
      },
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@unocss/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
    'nuxt-headlessui',
    'nuxt-radash',
    '@nuxt/image',
    '@primevue/nuxt-module',
    'nuxt-i18n-micro',
    '@nuxtjs/supabase',
    '@prisma/nuxt',

  ],
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: primePreset,
        options: {
          darkModeSelector: '.light',
        },
      },
    },
  },
  supabase: {
    redirect: false,
  },
  headlessui: {
    prefix: 'Headless',
  },
  prisma: {
    installStudio: false, // <-- this
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
    '@/assets/styles/main.css',

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
