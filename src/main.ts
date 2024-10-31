import '@/assets/styles/main.css'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router/router'
import vuetify from './plugins/vuetify'
import auth0 from './plugins/auth0'

const app = createApp(App)
app.use(auth0).use(vuetify).use(router)
app.mount('#app')
