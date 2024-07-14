import { defineStore } from 'pinia'

export const useEditStore = defineStore('edit', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    setCount() {
      this.count++
    }
  }
})
