import axios from './HttpResource'
import {getToken} from './TokenResource'

export default class BaseResource {
  api = ''
  token = ''
  setServer(server) {
    this.token = getToken(server?.headers?.cookie);
    console.log(this.token)
  }

  get(url, config) {
    return axios.get(`${this.api}${url}`, {...config, headers: {'Authorization': `Bearer ${this.token}}`}})
  }

  post(url, options, config) {
    return axios.post(`${this.api}${url}`, options, {...config, headers: {'Authorization': `Bearer ${this.token}}`}})
  }

  put(url, options, config) {
    return axios.put(`${this.api}${url}`, options, {...config, headers: {'Authorization': `Bearer ${this.token}}`}})
  }

  delete(url, config) {
    return axios.delete(`${this.api}${url}`, {...config, headers: {'Authorization': `Bearer ${this.token}}`}})
  }
}
