import { api } from '@/services/api'
import { cookieService } from '@/services'
import cookie from 'js-cookie'
import { userStore } from '@/store'

export default {

  async login(payload) {
    try {
      await cookieService.getCookie()
      await api.post('/api/auth/login', payload)
    } catch(e) {
      console.warn(e)
    }
  },

  async logout(payload) {
    try {
      await cookieService.removeCookie()
      userStore().$patch({ email: '' })
      await api.post('/api/auth/logout', payload)
    } catch(e) {
      console.warn(e)
    }
  },
  
  isLoggedIn() {
    try {
      return cookie.get('XSRF-TOKEN')
    } catch(e) {
      console.warn(e)
    }
  }

  /* async register(form) {
    await cookieService.getCookie();
    return api.post('/api/auth/register', form);
  },*/

}