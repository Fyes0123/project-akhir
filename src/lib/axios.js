import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
})

// Attach auth token from localStorage on every request
api.interceptors.request.use((config) => {
  const user = localStorage.getItem('auth_user')
  if (user) {
    const { token } = JSON.parse(user)
    if (token) config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Global response error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default api
