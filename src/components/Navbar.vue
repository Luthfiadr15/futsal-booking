<template>
  <nav class="navbar">
    <div class="logo">Futsal Booking</div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/jadwal">Jadwal</router-link></li>
      <li><router-link to="/reservasi">Reservasi</router-link></li>
      <li><router-link to="/pembayaran">Pembayaran</router-link></li>
      <li><router-link to="/prestasi">Prestasi</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/register">Register</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d47a1; /* biru gelap */
  padding: 1rem 2rem;
  color: white;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links li a.router-link-exact-active,
.nav-links li a:hover {
  color: #ff6f00; /* oranye terang */
}
</style>
