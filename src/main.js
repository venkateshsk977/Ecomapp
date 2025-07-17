import './assets/main.css'
import 'vuetify/styles'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import App from './App.vue'


const vuetify = createVuetify({ components, directives })

createApp(App).use(router).use(vuetify).mount('#app')
