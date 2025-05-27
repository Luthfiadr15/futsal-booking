<template>
  <section class="register">
    <h2>Daftar Akun Baru</h2>
    <form @submit.prevent="registerUser" class="form-register">
      <label>
        Nama Lengkap:
        <input type="text" v-model="nama" required placeholder="Masukkan nama lengkap" />
      </label>
      <label>
        Email:
        <input type="email" v-model="email" required placeholder="Masukkan email" />
      </label>
      <label>
        Password:
        <input type="password" v-model="password" required placeholder="Buat password" />
      </label>
      <button type="submit">Daftar</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      nama: '',
      email: '',
      password: ''
    }
  },
  methods: {
    registerUser() {
      if (!this.nama || !this.email || !this.password) {
        alert("Semua field harus diisi")
        return
      }
      alert(`Akun berhasil dibuat untuk ${this.nama}`)
      this.nama = ''
      this.email = ''
      this.password = ''
      // Bisa implementasi simpan akun ke backend atau localStorage
    }
  }
}
</script>

<style scoped>
.register {
  max-width: 450px;
  margin: 60px auto;
  background: linear-gradient(135deg, #4ade80, #15803d);
  padding: 30px 25px;
  border-radius: 25px;
  color: #f0fdf4;
  box-shadow: 0 12px 30px rgba(22, 163, 74, 0.7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2.2rem;
  text-shadow: 0 0 15px #22c55e;
}

.form-register label {
  display: block;
  margin-bottom: 15px;
  font-weight: 600;
}

.form-register input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 15px;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.3s ease;
}

.form-register input:focus {
  box-shadow: 0 0 12px #22c55e;
}

button {
  width: 100%;
  background-color: #15803d;
  border: none;
  padding: 12px 0;
  border-radius: 20px;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #166534;
}
</style>
