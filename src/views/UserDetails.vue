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
  import {mapActions, mapGetters} from "vuex";
  import UserCard from "../components/molecules/UserCard/index";
  import RepoDetail from "../components/molecules/RepoDetail/index";

  export default {
    name: "UserDetails",
    components: {RepoDetail, UserCard},
    computed: {
      ...mapGetters({
        user: 'user/getUser',
        repos: 'repo/getRepos',
      }),
      ...mapGetters({
        loading: 'getLoading'
      })
    },
    methods: {
      ...mapActions('user', [
        'fetchUser'
      ]),
      ...mapActions('repo', [
        'fetchRepos'
      ])
    },
    created() {
      // Get the user by route params
      this.fetchUser(this.$route.params.user)

      // Get the user's repositories by route params
      this.fetchRepos(this.$route.params.user)
    }
  }
</script>

<style scoped>

</style>
