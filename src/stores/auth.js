// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    username: '',
    isLoggedIn: false
  }),
  actions: {
    login(username) {
      this.username = username
      this.isLoggedIn = true
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username', username)
    },
    logout() {
      this.username = ''
      this.isLoggedIn = false
      localStorage.removeItem('isLoggedIn')
      localStorage.removeItem('username')
    },
    loadFromLocalStorage() {
      const saved = localStorage.getItem('isLoggedIn')
      const name = localStorage.getItem('username')
      if (saved === 'true' && name) {
        this.isLoggedIn = true
        this.username = name
      }
    }
  }
})
