import { api } from '@/services/api'
import cookie from 'js-cookie'

export default {

  async getCookie() {
    try {
      await cookie.get('XSRF-TOKEN')
      await api.get('/sanctum/csrf-cookie')
    } catch(e) {
      console.warn(e)
    }
  },

  async removeCookie() {
    try {
      await cookie.remove('XSRF-TOKEN')
      await cookie.remove('laravel_session')
    } catch(e) {
      console.warn(e)
    }
  }
}