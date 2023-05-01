import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { firebaseApp } from './utils/connections'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { VueFire, VueFireAuth } from 'vuefire'

const modules = [VueFireAuth()]
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueFire, { firebaseApp, modules })

app.mount('#app')
