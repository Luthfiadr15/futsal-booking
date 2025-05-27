import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import Jadwal from '../views/Jadwal.vue'
import Reservasi from '../views/Reservasi.vue'
import Pembayaran from '../views/Pembayaran.vue'
import Prestasi from '../views/Prestasi.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jadwal', component: Jadwal },
  { path: '/reservasi', component: Reservasi },
  { path: '/pembayaran', component: Pembayaran },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/prestasi', component: Prestasi }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
