<template>
    <form @submit.prevent="fetchUser(userLogin)">


                <v-text-field placeholder="insert a github user!" v-model="userLogin" color="primary">
                    <v-icon slot="prepend" color="green">@</v-icon>
                    <GFBtn @click="fetchUser(userLogin)"
                           :text="true"
                           :slot="'append'"
                           :color="'primary'">
                        Search
                    </GFBtn>
                </v-text-field>

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
