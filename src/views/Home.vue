<template>
    <v-container class="home">
        <h1 class="display-3">Hey, welcome!</h1>
        <p class="">This is a simple github users search! Type down and find some users and there repos! Don't
            forget to help the community! ;)</p>
        <v-divider/>
        <Input/>
        <Loading v-if="loading"/>
        <UserCard v-if="user && !loading" :user="user"/>
        <NoUser v-if="!user && !loading"/>
    </v-container>
</template>

<script>
  // @ is an alias to /src

  import Input from "../components/Input";
  import UserCard from "../components/UserCard";
  import {mapGetters} from "vuex";
  import Loading from "../components/Loading";
  import NoUser from "../components/NoUser";

  export default {
    name: 'home',
    components: {NoUser, Loading, UserCard, Input},
    computed: {
      ...mapGetters({
        user: 'getUser',
        loading: 'getLoading'
      })
    },
  }
</script>
