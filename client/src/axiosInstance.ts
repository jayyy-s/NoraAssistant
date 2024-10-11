import axios from 'axios'

const baseURL =
  import.meta.env.VITE_API_ENV === 'development'
    ? import.meta.env.VITE_API_BASE_URL
    : 'https://NoraAssistant.onrender.com'
console.log(baseURL)
const axiosInstance = axios.create({
  baseURL: baseURL
})

export default axiosInstance
