import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useReservasiStore } from './reservasiStore'

describe('reservasiStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('harus menyimpan data reservasi', () => {
    const store = useReservasiStore()

    const dummyData = {
      nama: 'Budi',
      tanggal: '2025-07-03',
      jam: '15:00',
      lapangan: 'Lapangan 1',
      status: 'Dipesan'
    }

    store.simpanReservasi(dummyData)

    expect(store.reservasiTerakhir).toEqual(dummyData)
  })
})
