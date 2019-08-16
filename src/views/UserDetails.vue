<template>
    <v-container class="user-details">
        <UserCard :user="user"/>
        <Loading v-if="!repos"/>
        <v-layout wrap v-else class="justify-space-around">
            <RepoDetail v-for="repo in repos" :key="repo.id" :repo="repo"/>
        </v-layout>
    </v-container>
</template>

<script>
  import UserCard from "../components/molecules/UserCard/index";
  import {mapGetters} from "vuex";
  import RepoDetail from "../components/molecules/RepoDetail/index";

  export default {
    name: "UserDetails",
    components: {RepoDetail, UserCard},
    computed: {
      ...mapGetters({
        user: 'getUser',
        repos: 'getRepos',
        loading: 'getLoading'
      })
    },
    created() {
      this.$store.dispatch('fetchUser', this.$route.params.user)
      this.$store.dispatch('fetchRepos', this.$route.params.user)
    }
  }
</script>

<style scoped>

</style>
