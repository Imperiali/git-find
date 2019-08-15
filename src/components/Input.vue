<template>
    <form @submit.prevent="fetchUser(userLogin)">
        <v-text-field v-model="userLogin">
            <v-icon slot="prepend" color="green">@</v-icon>
            <v-btn @click="fetchUser(userLogin)" slot="append" outlined>Search</v-btn>
        </v-text-field>
    </form>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "Input",
    data() {
      return {
        userLogin: ''
      }
    },
    methods: {
      ...mapActions(['fetchUser'])
    }
  }
</script>

<style scoped>

</style>
