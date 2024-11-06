import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  content: {
    filesystem: ['content/**'],
  },
  shortcuts: [
    {
      'app-container': 'px-24px sm:px-1.5rem max-w-7xl m-auto w-full',

    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      /*  customizations: {
        transform(svg, collection) {
          if (collection === 'czkc')
            svg = svg.replace(/stroke="#[a-zA-Z0-9]+"/, 'stroke="currentColor"')
          if (collection !== 'images')
            svg = svg.replace(/fill="#[a-zA-Z0-9]+"/, 'fill="currentColor"')

          return svg
        },
      }, */

      /* collections, */

    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        kumbhSans: [
          {
            name: 'Kumbh Sans',
            weights: [400, 500, 700, 800],
          },
        ],
      },
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      app: {
        primary: '#5e989e',
        secondary: '#ae8b6d',
        accent: {
          primary: '#bafa03',
          secondary: '#000000',
        },
        text: '#909090',
        border: '#e0e0e0',
        error: '#F53232',
        grey: '#F8F8F8',
        whiteGrey: '#F2F2F8',
        darkGrey: '#C0C0C0',
      },
    },
    breakpoints: {
      'xs': '550px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
})
