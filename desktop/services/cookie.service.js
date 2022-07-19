import api from '@services/api/base-api.js';
import cookie from 'js-cookie';

export default {
  getCookie() {
    let token = cookie.get('XSRF-TOKEN');

    if (token) {
      return new Promise(resolve => {
        resolve(token);
      });
    }

    return api.get('/sanctum/csrf-cookie');
  }
};