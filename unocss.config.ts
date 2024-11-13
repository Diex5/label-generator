import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
} from 'unocss'

export const themeColors = {
  primary: {
    50: '#e0f7f7', // Světlejší tyrkysová s jemně šedým nádechem
    100: '#b3e6e6', // Světlejší tyrkysová s jemně šedým nádechem
    200: '#80d3d3', // Světlejší tyrkysová s jemně šedým nádechem
    300: '#4dc0c2', // Střední tyrkysová
    400: '#26b3b3', // Střední tyrkysová
    500: '#3ac9ba', // Hlavní tyrkysová
    600: '#3ac9ba',
    700: '#34b3a5',
    800: '#2e9d90',
    900: '#28867a',
    950: '#227065',
  },
  surface: {
    0: '#f3f4f6', // Jemně šedá, místo čisté bílé
    50: '#f0f0f0', // Světle šedá
    100: '#e0e0e0', // Tmavší šedá
    200: '#d1d1d1', // Tmavší šedá
    300: '#b2b2b2', // Tmavší šedá
    400: '#9a9a9a', // Šedá
    500: '#7f7f7f', // Střední šedá
    600: '#666666', // Střední šedá
    700: '#4c4c4c', // Tmavší šedá
    800: '#333333', // Tmavá šedá
    900: '#1a1a1a', // Velmi tmavá šedá
    950: '#0d0d0d', // Tmavě šedá (ne úplně černá)
  },

}

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
      ...themeColors,
      gray: themeColors.surface,
      white: themeColors.surface[0],
      black: themeColors.surface[950],
      indigo: themeColors.primary,
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
