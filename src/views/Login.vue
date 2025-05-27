<template>
  <section class="login">
    <h2>Login Pengguna</h2>
    <form @submit.prevent="loginUser" class="form-login">
      <label>
        Email:
        <input type="email" v-model="email" required placeholder="Masukkan email" />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required placeholder="Masukkan password" />
      </label>
      <button type="submit">Login</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginUser() {
      if (!this.email || !this.password) {
        alert('Email dan password wajib diisi')
        return
      }

      // Simulasi login sukses
      alert(`Login berhasil untuk ${this.email}`)

      // Arahkan ke halaman Home
      this.$router.push('/')

      // Reset form
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 60px auto;
  background: linear-gradient(135deg, #6366f1, #4338ca);
  padding: 30px 25px;
  border-radius: 20px;
  color: #e0e7ff;
  box-shadow: 0 12px 30px rgba(99, 102, 241, 0.7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2.2rem;
  text-shadow: 0 0 12px #8b5cf6;
}

.form-login label {
  display: block;
  margin-bottom: 15px;
  font-weight: 600;
}

.form-login input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.3s ease;
}

.form-login input:focus {
  box-shadow: 0 0 10px #8b5cf6;
}

button {
  width: 100%;
  background-color: #7c3aed;
  border: none;
  padding: 12px 0;
  border-radius: 15px;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5b21b6;
}
</style>
