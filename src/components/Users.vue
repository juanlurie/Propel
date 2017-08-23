<template>
  <div>
    <v-dialog v-model="dialog" lazy absolute>
      <v-btn primary dark slot="activator">Add User</v-btn>
      <v-card>
        <v-card-title>
          <div class="headline">Add User</div>
        </v-card-title>
        <v-card-text>
          <v-layout row>
            <v-flex xs12>
              <v-text-field name="name" v-model="name" label="Name"></v-text-field>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="green--text darken-1" flat="flat" @click.native="addUser()">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table v-bind:headers="headers" :items="items" hide-actions class="elevation-1">
      <template slot="items" scope="props">
        <td class="text-xs-right">{{ props.item.name }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import http from '../services/http'

export default {
  name: 'component',
  data() {
    return {
      items: [],
      headers: [{ text: 'Name', value: 'name' }],
      dialog: false,
      name: ''
    }
  },
  created() {
    this.load()
  },
  methods: {
    addUser: function() {
      http.post('http://localhost:3000/users', { name: this.name }).then(x => {
        this.dialog = false
        this.load()
      })
    },
    load: function() {
      http.get('http://localhost:3000/users').then(x => {
        this.items = x.body
      })
    }
  }
}
</script>

<style>

</style>
