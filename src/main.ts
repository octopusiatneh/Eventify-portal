import '@/assets/styles/main.css'
import { createAuth0 } from '@auth0/auth0-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const auth0 = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
  },
})
const vuetify = createVuetify({
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
})
const app = createApp(App)
app.use(vuetify).use(router).use(auth0)
app.mount('#app')
