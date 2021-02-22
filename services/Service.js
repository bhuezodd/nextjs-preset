import BaseResource from "./core/BaseResource";

export default class Service extends BaseResource {

  fetch(config) {
    return this.get('', config)
  }

  show(id, config) {
    return this.get(`/${id}`, config)
  }

  store(options, config) {
    return this.post('', options, config)
  }

  update(id, options, config) {
    return this.put(`/${id}`, options, config)
  }

  destroy(id, config) {
    return this.delete(`/${id}`, config)
  }
}
