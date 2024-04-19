import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Lara from '@/presets/lara'

import MainApp from '@/components/main.vue'

const app = createApp(MainApp)

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
})

app.mount('#app')