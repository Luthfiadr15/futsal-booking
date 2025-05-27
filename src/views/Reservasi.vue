<template>
  <section class="reservasi">
    <h2>Reservasi Lapangan</h2>
    <form @submit.prevent="submitReservasi" class="form-reservasi">
      <label>
        Nama:
        <input type="text" v-model="nama" required placeholder="Masukkan nama lengkap" />
      </label>
      <label>
        Tanggal:
        <input type="date" v-model="tanggal" required />
      </label>
      <label>
        Jam:
        <input type="time" v-model="jam" required />
      </label>
      <label>
        Lapangan:
        <select v-model="lapangan" required>
          <option disabled value="">Pilih lapangan</option>
          <option>Lapangan 1</option>
          <option>Lapangan 2</option>
          <option>Lapangan 3</option>
        </select>
      </label>
      <button type="submit">Pesan Sekarang</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "Reservasi",
  data() {
    return {
      nama: '',
      tanggal: '',
      jam: '',
      lapangan: ''
    }
  },
  methods: {
    submitReservasi() {
      if (!this.nama || !this.tanggal || !this.jam || !this.lapangan) {
        alert("Semua field harus diisi dengan benar!")
        return
      }

      let jadwal = JSON.parse(localStorage.getItem('jadwal')) || []
      jadwal.push({
        nama: this.nama,
        tanggal: this.tanggal,
        jam: this.jam,
        lapangan: this.lapangan
      })
      localStorage.setItem('jadwal', JSON.stringify(jadwal))
      alert("Reservasi berhasil ditambahkan!")
      this.nama = ''
      this.tanggal = ''
      this.jam = ''
      this.lapangan = ''
    }
  }
}
</script>

<style scoped>
.reservasi {
  max-width: 500px;
  margin: 40px auto;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  padding: 30px 25px;
  border-radius: 25px;
  color: #dbeafe;
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.6);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 2.2rem;
  text-shadow: 0 0 10px #93c5fd;
}

.form-reservasi label {
  display: block;
  margin-bottom: 15px;
  font-weight: 600;
}

.form-reservasi input,
.form-reservasi select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.3s ease;
}

.form-reservasi input:focus,
.form-reservasi select:focus {
  box-shadow: 0 0 8px #60a5fa;
}

button {
  width: 100%;
  background-color: #2563eb;
  border: none;
  padding: 12px 0;
  border-radius: 15px;
  font-weight: 700;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1e40af;
}
</style>
