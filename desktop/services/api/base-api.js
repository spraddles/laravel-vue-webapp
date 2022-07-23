import axios from 'axios'

const baseApi = axios.create({
  baseURL: process.env.VUE_APP_LARAVEL_API_URI,
  withCredentials: true,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default baseApi
