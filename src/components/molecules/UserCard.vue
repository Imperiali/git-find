<template>
    <v-card
            class="mx-auto"
            outlined
    >
    <v-layout wrap>
        <v-flex>
            <v-img max-width="300" :src="user.avatar_url"/>
        </v-flex>
        <v-flex>
            <v-card-title class="headline mb-1">{{user.login}}</v-card-title>
            <v-card-text>{{user.bio}}</v-card-text>
            <v-card-text v-if="user.email" class="overline mb-4">{{user.email}}</v-card-text>
            <v-card-text v-else class="overline mb-4">No e-mail avaliable :(</v-card-text>
            <v-card-actions>
                <GFBtn @click="toRepositories">Go to repositories!</GFBtn>
            </v-card-actions>
        </v-flex>
    </v-layout>
    </v-card>
</template>

<script>

  import GFBtn from "../atoms/GF-btn/index";
  export default {
    name: "UserCard",
    components: {GFBtn},
    props: ['user'],
    methods: {
      toRepositories() {
        this.$router.push({name: 'user', params: {user: this.user.login, ...this.user}})
      }
    }
  }
</script>

<style scoped>

</style>
