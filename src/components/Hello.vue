<template>
  <div>
        <v-btn light>Normal</v-btn>
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
      http.get('http://localhost:3000/users').then(x => {
        this.test = x.body
      })
    }
  }
}
</script>

<style>

</style>
