import axios from 'axios'

const token = null;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

instance.interceptors.request.use(config => {
  return config
})


export default instance
