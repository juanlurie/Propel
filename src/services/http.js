import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default {
  get () {
    return Vue.http.get('http://httpbin.org/ip')
  }
}
