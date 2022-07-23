import api from '@services/api/base-api.js'
import cookieService from '@services/cookie.service.js'
import cookie from 'js-cookie'

export default {

  async login(payload) {
    await cookieService.getCookie()
    await api.post('/api/auth/login', payload)
  },

  async logout(payload) {
    await cookieService.removeCookie()
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