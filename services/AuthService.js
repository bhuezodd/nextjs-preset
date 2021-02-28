import {setToken} from "./core/TokenResource";
import Service from "./Service";


class AuthService extends Service {
  api = ''
  async login(options) {
    const {data} = await this.post('/login', options)
    setToken(data.token)
    return data
  }

  register(options) {
    return this.post('/register', options)
  }
}

export default new AuthService()
