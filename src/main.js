// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

import { useAuthStore } from './stores/auth'
const auth = useAuthStore()
auth.loadFromLocalStorage()

app.mount('#app')