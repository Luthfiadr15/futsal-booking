// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Jadwal from '../views/Jadwal.vue'
import Reservasi from '../views/Reservasi.vue'
import Prestasi from '../views/Prestasi.vue'
import Logins from '../pages/Logins.vue'
import { useAuthStore } from '@/stores/auth'

const routes = [
  { path: '/', component: Home },
  { path: '/jadwal', component: Jadwal },
  { path: '/reservasi', component: Reservasi },
  { path: '/login', component: Login },
  { path: '/prestasi', component: Prestasi },
  { path: '/logins', component: Logins },
  { path: '/:pathMatch(.*)*', redirect: '/' } // fallback jika URL salah
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ Proteksi route agar user yang belum login diarahkan ke /login
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !auth.isLoggedIn) {
    return next('/login')
  }

  next()
})

export default router
