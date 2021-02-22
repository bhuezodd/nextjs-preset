import axios from 'axios'
//import {getToken} from './TokenResource'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

/*instance.interceptors.request.use(config => {
  console.log(config.cookie)
  const token = getToken(config.cookie);
  console.log(token, 'test')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})*/


export default instance
