import { defineStore } from 'pinia'

export const useReservasiStore = defineStore('reservasi', {
  state: () => ({
    reservasiTerakhir: null
  }),
  actions: {
    simpanReservasi(data) {
      this.reservasiTerakhir = data
    }
  }
})
