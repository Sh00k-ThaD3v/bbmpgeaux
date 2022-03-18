import axios from 'axios'

const axiosInstance = axios.create({
  timeout: 1000 * 60
})

axiosInstance.interceptors.response.use(
  async response => {
    return response.data
  },
  error => {
    throw error
  }
)

export default function request (config) {
  return axiosInstance.request(config)
}
