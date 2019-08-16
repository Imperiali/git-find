<template>
    <form @submit.prevent="fetchUser(userLogin)">
        <v-text-field v-model="userLogin">
            <v-icon slot="prepend" color="green">@</v-icon>
            <GFBtn @click="fetchUser(userLogin)"
                   :slot="'append'"
                   :outlined="true"
                   :color="'green'">
                Search
            </GFBtn>
        </v-text-field>
    </form>
</template>

<script>
  import {mapActions} from 'vuex';
  import GFBtn from "../atoms/GF-btn/index";

  export default {
    name: "Input",
    components: {GFBtn},
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
