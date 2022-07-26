import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_LARAVEL_API_URI,
  withCredentials: true,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
