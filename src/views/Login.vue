<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="auth-box">
      <h2>{{ isLogin ? 'Login' : 'Register' }}</h2>

      <form @submit.prevent="handleSubmit" class="form-box">
        <div class="form-group">
          <label>Username</label>
          <input v-model="form.username" required />
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="form.password" required />
        </div>

        <button type="submit">
          {{ isLogin ? 'Login' : 'Register' }}
        </button>

        <p class="switch" @click="toggleMode">
          {{ isLogin ? 'Belum punya akun? Register di sini' : 'Sudah punya akun? Login di sini' }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const BASE_URL = 'https://my-json-server.typicode.com/Luthfiadr15/futsal-booking'

export default {
  name: 'Login',
  data() {
    return {
      isLogin: true,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    toggleMode() {
      this.isLogin = !this.isLogin
      this.form.username = ''
      this.form.password = ''
    },
    async handleSubmit() {
      try {
        const res = await axios.get(`${BASE_URL}/users?username=${this.form.username}`)

        if (this.isLogin) {
          if (res.data.length === 0 || res.data[0].password !== this.form.password) {
            alert('❌ Username atau password salah')
            return
          }

          const auth = useAuthStore()
          auth.login(this.form.username)

          await axios.post(`${BASE_URL}/logins`, {
            username: this.form.username,
            timestamp: new Date().toISOString()
          })

          this.$router.push('/')
        } else {
          if (res.data.length > 0) {
            alert('❌ Username sudah terdaftar')
            return
          }

          await axios.post(`${BASE_URL}/users`, {
            username: this.form.username,
            password: this.form.password
          })

          alert('✅ Registrasi berhasil, silakan login')
          this.toggleMode()
        }
      } catch (err) {
        console.error(err)
        alert('❌ Terjadi kesalahan saat memproses data')
      }
    }
  }
}
</script>

<style scoped>
.auth-box {
  max-width: 400px;
  margin: 60px auto;
  background: linear-gradient(135deg, #6366f1, #4338ca);
  padding: 30px 25px;
  border-radius: 20px;
  color: #e0e7ff;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.auth-box h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-shadow: 0 0 12px #8b5cf6;
}

.form-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 6px;
}

input {
  padding: 10px 12px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  transition: box-shadow 0.3s ease;
}

input:focus {
  box-shadow: 0 0 10px #8b5cf6;
}

button {
  background-color: #7c3aed;
  color: white;
  font-weight: 700;
  padding: 12px;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5b21b6;
}

.switch {
  margin-top: 10px;
  text-align: center;
  color: #dbeafe;
  cursor: pointer;
  font-size: 0.95rem;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
}
</style>
