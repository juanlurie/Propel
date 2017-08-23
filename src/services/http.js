import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  get(url) {
    return Vue.http.get(url)
  },
  post(url, body) {
    return Vue.http.post(url, body)
  }
}
