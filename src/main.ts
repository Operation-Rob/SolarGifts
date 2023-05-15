import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mitt from 'mitt'
import App from './App.vue'
import router from './router'

const emitter = mitt()
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.provide('emitter', emitter);
app.mount('#app')
