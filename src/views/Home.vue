<template>
    <v-container class="home">
        <h1 class="display-3">Hey, welcome!</h1>
        <p class="">This is a simple github users search! Type down and find some users and there repos! Don't
            forget to help the community! ;)</p>
        <v-divider/>
        <Input/>
        <GFLoading :color="'primary'" v-if="loading"/>
        <UserCard v-if="user && !loading" :user="user"/>
        <NoUser v-if="!user && !loading"/>
    </v-container>
</template>

<script>
  // @ is an alias to /src

  import Input from "../components/molecules/Input";
  import UserCard from "../components/molecules/UserCard";
  import {mapGetters} from "vuex";
  import GFLoading from "../components/atoms/GF-Loading";
  import NoUser from "../components/atoms/NoUser";

  export default {
    name: 'home',
    components: {NoUser, GFLoading, UserCard, Input},
    computed: {
      ...mapGetters({
        user: 'getUser',
        loading: 'getLoading'
      })
    },
  }
</script>
