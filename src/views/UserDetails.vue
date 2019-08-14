<template>
    <div class="user-details">
        <UserCard :user="user"/>
        <div class="" v-for="repo in repos" :key="repo.id">
            <RepoDetail :repo="repo"/>
        </div>
    </div>
</template>

<script>
  import UserCard from "../components/UserCard";
  import {mapGetters} from "vuex";
  import RepoDetail from "../components/RepoDetail";

  export default {
    name: "UserDetails",
    props: ['login', 'followers', 'following', 'bio', 'email', 'avatar_url']
  }
</script>

<style scoped>

</style>
