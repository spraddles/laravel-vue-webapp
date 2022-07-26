import { api } from '@/services/api'
import cookie from 'js-cookie'

export default {

  async getCookie() {
    await cookie.get('XSRF-TOKEN')
    await api.get('/sanctum/csrf-cookie')
  },

  async removeCookie() {
    await cookie.remove('XSRF-TOKEN')
    await cookie.remove('laravel_session')
  }

}