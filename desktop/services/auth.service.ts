import { api } from '@/services/api'
import { cookieService } from '@/services'
import cookie from 'js-cookie'
import { userStore } from '@/store'

export default {

  async login(payload) {
    await cookieService.getCookie()
    await api.post('/api/auth/login', payload)
  },

  async logout(payload) {
    await cookieService.removeCookie()
    userStore().$patch({ email: '' })
    await api.post('/api/auth/logout', payload)
  },
  
  isLoggedIn() {
    return cookie.get('XSRF-TOKEN')
  }

  /* async register(form) {
    await cookieService.getCookie();
    return api.post('/api/auth/register', form);
  },*/

}