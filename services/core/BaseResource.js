import axios from './HttpResource'

export default class BaseResource {
  api = ''

  get(url, config) {
    return axios.get(`${this.api}${url}`, config)
  }

  post(url, options, config) {
    return axios.get(`${this.api}${url}`, options, config)
  }

  put(url, options, config) {
    return axios.put(`${this.api}${url}`, options, config)
  }

  delete(url, config) {
    return axios.delete(`${this.api}${url}`, config)
  }
}
