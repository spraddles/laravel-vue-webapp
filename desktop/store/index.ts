import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return { 
      email: ''
    }
  },
  persist: true,
  actions: {},
})