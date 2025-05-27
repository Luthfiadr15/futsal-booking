<template>
  <section class="pembayaran">
    <h2>Pembayaran Reservasi</h2>
    <form @submit.prevent="prosesPembayaran" class="form-pembayaran">
      <label>
        Nama Pemesan:
        <input type="text" v-model="nama" required placeholder="Masukkan nama pemesan" />
      </label>
      <label>
        Nomor Rekening:
        <input type="text" v-model="rekening" required placeholder="Masukkan nomor rekening" />
      </label>
      <label>
        Jumlah Pembayaran:
        <input type="number" v-model="jumlah" required placeholder="Masukkan jumlah pembayaran" />
      </label>
      <button type="submit">Bayar Sekarang</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Pembayaran",
  data() {
    return {
      nama: '',
      rekening: '',
      jumlah: ''
    }
  },
  methods: {
    prosesPembayaran() {
      if (!this.nama || !this.rekening || !this.jumlah) {
        alert("Mohon lengkapi data pembayaran")
        return
      }
      alert(`Pembayaran sebesar Rp${this.jumlah} atas nama ${this.nama} berhasil!`)
      this.nama = ''
      this.rekening = ''
      this.jumlah = ''
    }
  }
}
</script>

<style scoped>
.pembayaran {
  max-width: 450px;
  margin: 60px auto;
  background: linear-gradient(135deg, #facc15, #b45309);
  padding: 30px 25px;
  border-radius: 25px;
  color: #422006;
  box-shadow: 0 12px 30px rgba(202, 138, 4, 0.7);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2.2rem;
  text-shadow: 0 0 12px #fbbf24;
}

.form-pembayaran label {
  display: block;
  margin-bottom: 15px;
  font-weight: 600;
}

.form-pembayaran input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 15px;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.3s ease;
}

.form-pembayaran input:focus {
  box-shadow: 0 0 12px #fbbf24;
}

button {
  width: 100%;
  background-color: #b45309;
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
  background-color: #78350f;
}
</style>
