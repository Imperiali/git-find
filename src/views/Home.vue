<template>
    <v-container class="home">
        <h1 class="display-3">Hey, welcome!</h1>
        <p class="">This is a simple github users search! Type down and find some users and there repos! Don't
            forget to help the community! ;)</p>
        <v-divider/>
        <GFInput/>
        <GFLoading :color="'primary'" v-if="loading"/>
        <UserCard v-if="user && !loading" :user="user"/>
        <NoUser v-if="!user && !loading"/>
    </v-container>
</template>

<script>
  // @ is an alias to /src

  import UserCard from "../components/molecules/UserCard/index";
  import {mapGetters} from "vuex";
  import GFLoading from "../components/atoms/GF-loading/index";
  import NoUser from "../components/atoms/NoUser/index";
  import GFInput from "../components/molecules/GF-input/index";

  export default {
    name: 'home',
    components: {GFInput, NoUser, GFLoading, UserCard},
    computed: {
      ...mapGetters({
        user: 'user/getUser',
      }),
      ...mapGetters({
        loading: 'getLoading'
      })

    },
  }
</script>
