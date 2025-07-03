import { createRouter, createWebHistory } from 'vue-router'

// Import semua halaman
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Jadwal from '../views/Jadwal.vue'
import Reservasi from '../views/Reservasi.vue'
import Prestasi from '../views/Prestasi.vue'
import Logins from '../pages/Logins.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jadwal', component: Jadwal },
  { path: '/reservasi', component: Reservasi },
  { path: '/login', component: Login },
  { path: '/prestasi', component: Prestasi },
  { path: '/logins', component: Logins }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router