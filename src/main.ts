import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import { apolloPlugin } from './graphql/apollo'
import PrimeVue from 'primevue/config'
import Aura from '@/presets/aura'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  pt: Aura
})

app.use(apolloPlugin)

app.mount('#app')
