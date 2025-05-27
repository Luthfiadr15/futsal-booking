<template>
  <section class="prestasi">
    <h2>Prestasi team Kami</h2>
    <p>Berikut beberapa prestasi yang telah kami raih dalam berbagai kompetisi.</p>
    <div class="gallery">
      <img v-for="(foto, idx) in fotoPrestasi" :key="idx" :src="foto" alt="Prestasi Futsal" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Prestasi",
  data() {
    return {
      fotoPrestasi: [
        require('@/assets/prestasi1.jpg'),
        require('@/assets/prestasi2.jpg'),
        require('@/assets/prestasi3.jpg')
      ]
    }
  }
}
</script>

<style scoped>
.prestasi {
  max-width: 900px;
  margin: 40px auto;
  background: linear-gradient(135deg, #d97706, #b45309);
  padding: 30px 30px;
  border-radius: 25px;
  color: #fff7ed;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 12px 30px rgba(180, 83, 9, 0.7);
  text-align: center;
}

.prestasi h2 {
  font-size: 2.8rem;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 0 0 15px #fcd34d;
}

.prestasi p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  font-weight: 600;
  text-shadow: 0 0 10px #fbbf24;
}

.gallery {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.gallery img {
  width: 280px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(255 255 255 / 0.25);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.gallery img:hover {
  transform: scale(1.07);
  box-shadow: 0 12px 30px rgba(255 255 255 / 0.45);
}
</style>
