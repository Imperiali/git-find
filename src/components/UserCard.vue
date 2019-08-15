<template>
    <v-card
            class="mx-auto"
            outlined
    >
        <v-list-item three-line>
            <v-list-item-avatar

                    tile
                    size="180"
                    color="grey"
            >
                <v-img :src="user.avatar_url"/>
            </v-list-item-avatar>
            <v-list-item-content>
                <div v-if="user.email" class="overline mb-4">{{user.email}}</div>
                <div v-else class="overline mb-4">No e-mail avaliable :(</div>
                <v-list-item-title class="headline mb-1">{{user.login}}</v-list-item-title>
                <v-list-item-subtitle>{{user.bio}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-card-actions >
                <v-btn @click="toRepositories">Go to repositories!</v-btn>
            </v-card-actions>
        </v-list-item>
    </v-card>
</template>

<script>

  export default {
    name: "UserCard",
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
