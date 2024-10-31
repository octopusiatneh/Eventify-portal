import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#154786',
          secondary: '#F7CB95',
          accent: '#d0dae7',
          error: '#A64434',
          info: '#10366F',
          success: '#106F62',
          warning: '#FFC107',
          tertiary: '#ededed',
          disabled: '#9B9B9B',
          filled: '#f0f0f0',
          brownieRed: '#9B321E',
          primaryLight: '#d0dae7',
          primaryDark: '#001d54',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
