<template>
    <form @submit.prevent="fetchUser(userLogin)">
        <v-layout class="align-center">
            <v-flex class="col-10">
                <v-text-field placeholder="insert a github user!" v-model="userLogin" color="primary">
                    <v-icon slot="prepend" color="green">@</v-icon>
                </v-text-field>
            </v-flex>
            <v-flex class="col-2 mb-2">
                <GFBtn @click="fetchUser(userLogin)"
                       :slot="'append'"
                       :outlined="true"
                       :color="'primary'">
                    Search
                </GFBtn>
            </v-flex>
        </v-layout>
    </form>
</template>

<script>
  import {mapActions} from 'vuex';
  import GFBtn from "../../atoms/GF-btn/index";

  export default {
    name: "GF-Input",
    components: {GFBtn},
    data() {
      return {
        userLogin: ''
      }
    },
    methods: {
      ...mapActions('user',
        ['fetchUser'])
    }
  }
</script>

<style scoped>

</style>
