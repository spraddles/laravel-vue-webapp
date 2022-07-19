import api from '@services/api/base-api.js';
import cookie from '@services/cookie.service.js';

export default {

  async login(payload) {
    await cookie.getCookie();

    return api.post('/api/auth/login', payload);
  },

  async logout() {
    await cookie.getCookie();

    return api.post('/api/auth/logout');
  }

  /* async register(form) {
    await Csrf.getCookie();

    return Api.post('/api/auth/register', form);
  },*/

};