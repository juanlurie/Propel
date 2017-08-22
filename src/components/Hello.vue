<template>
  <div>
    <img src="../assets/logo.png"> {{test}}
  </div>
</template>

<script>
import http from '../services/http'

export default {
  name: 'component',
  data () {
    return {
      test: ''
    }
  },
  created () {
    this.load()
  },
  methods: {
    load: function () {
      http.get('http://httpbin.org/ip').then(x => {
        this.test = x.body.origin
      })
    }
  }
}
</script>

<style>

</style>
