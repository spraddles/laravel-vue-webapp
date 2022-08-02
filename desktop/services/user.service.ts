import { api } from '@/services/api'

export default {

  async getDetails(userEmail) {
    try {
      const response = await api.post('/api/user/me', userEmail)
      return response
    } catch(e) {
      console.warn('This service is unavailable')
    }
  },

  async updateDetails(id, payload) {
    try {
      const response = await api.patch(`/api/user/update/${id}`, payload)
      return response
    } catch(e) {
      console.warn('This service is unavailable')
    }
  }
}