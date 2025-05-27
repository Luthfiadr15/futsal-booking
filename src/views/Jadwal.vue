<template>
  <section class="jadwal">
    <h2>Jadwal Reservasi Lapangan</h2>

    <!-- Tombol Navigasi ke Halaman Reservasi -->
    <div class="btn-reservasi-wrapper">
      <button class="btn-reservasi" @click="goToReservasi">Reservasi Sekarang</button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Jam</th>
          <th>Nama Pemesan</th>
          <th>Lapangan</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in jadwal" :key="index">
          <td>{{ item.tanggal }}</td>
          <td>{{ item.jam }}</td>
          <td>{{ item.nama }}</td>
          <td>{{ item.lapangan }}</td>
          <td><button @click="hapusJadwal(index)">Hapus</button></td>
        </tr>
        <tr v-if="jadwal.length === 0">
          <td colspan="5">Belum ada jadwal reservasi.</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "Jadwal",
  data() {
    return {
      jadwal: JSON.parse(localStorage.getItem('jadwal')) || []
    }
  },
  methods: {
    hapusJadwal(index) {
      this.jadwal.splice(index, 1)
      localStorage.setItem('jadwal', JSON.stringify(this.jadwal))
    },
    goToReservasi() {
      this.$router.push('/reservasi')
    }
  },
  mounted() {
    const today = new Date()
    this.jadwal = this.jadwal.filter(item => {
      const tanggalJadwal = new Date(item.tanggal + ' ' + item.jam)
      return tanggalJadwal >= today
    })
    localStorage.setItem('jadwal', JSON.stringify(this.jadwal))
  }
}
</script>

<style scoped>
.jadwal {
  max-width: 900px;
  margin: 40px auto;
  background: linear-gradient(135deg, #2563eb, #1e40af);
  padding: 25px 30px;
  border-radius: 20px;
  color: #dbeafe;
  box-shadow: 0 12px 30px rgba(59, 130, 246, 0.6);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.jadwal h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  font-weight: 700;
  text-shadow: 0 0 15px #93c5fd;
}

.btn-reservasi-wrapper {
  text-align: center;
  margin-bottom: 25px;
}

.btn-reservasi {
  background-color: #10b981;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-reservasi:hover {
  background-color: #059669;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(255 255 255 / 0.1);
  border-radius: 15px;
  overflow: hidden;
}

thead tr {
  background: #3b82f6;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  text-align: left;
}

th, td {
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255 255 255 / 0.2);
}

tbody tr:hover {
  background: rgba(255 255 255 / 0.15);
}

button {
  background-color: #ef4444;
  border: none;
  padding: 8px 14px;
  border-radius: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b91c1c;
}
</style>
