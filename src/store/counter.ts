import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { CountryDetail } from '@/types'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const detailCountry = defineStore('detailCountry', () => {
  const detail = ref<CountryDetail | null>(null)

  function setDetail(d: CountryDetail) {
    detail.value = d
  }

  return { setDetail, detail }
})
