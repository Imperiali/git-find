<template>
    <v-container class="user-details">
        <UserCard :user="user"/>
        <Loading v-if="!repos"/>
        <div v-else class="" v-for="repo in repos" :key="repo.id">
            <RepoDetail :repo="repo"/>
        </div>
    </v-container>
</template>

<script>
  import UserCard from "../components/UserCard";
  import {mapGetters} from "vuex";
  import RepoDetail from "../components/RepoDetail";

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
