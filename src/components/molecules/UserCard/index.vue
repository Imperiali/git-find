<template>
    <v-card
            class="mx-auto"
            outlined
    >
        <v-layout wrap>
            <v-flex>
                <v-img alt="github user avatar" max-width="300" :src="user.avatar_url"/>
            </v-flex>
            <v-flex>
                <v-card-title class="headline mb-1">
                    <v-layout>
                        {{user.login}}
                    </v-layout>
                    <v-layout class="justify-end">
                        <GFChip :color="'primary'">
                            <template v-slot:avatar>
                                {{user.followers}}
                            </template>
                            <template v-slot:description>
                                Followers
                            </template>
                        </GFChip>
                        <GFChip :color="'primary'">
                            <template v-slot:avatar>
                                {{user.following}}
                            </template>
                            <template v-slot:description>
                                Following
                            </template>
                        </GFChip>
                    </v-layout>
                </v-card-title>
                <v-card-text>{{user.bio}}</v-card-text>
                <v-card-text v-if="user.email" class="overline mb-4">{{user.email}}</v-card-text>
                <v-card-text v-else class="overline mb-4">No e-mail avaliable :(</v-card-text>
                <v-card-actions v-if="showBtn">
                    <GFBtn :color="'primary'" :outlined="true" @click="toRepositories">Go to repositories!</GFBtn>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>

  import GFBtn from "../../atoms/GF-btn/index";
  import GFChip from "../../atoms/GF-chip/index";

  export default {
    name: "UserCard",
    components: {GFChip, GFBtn},
    props: ['user'],
    methods: {
      toRepositories() {
        // Send to repositories page
        this.$router.push({name: 'user', params: {user: this.user.login, ...this.user}})
      }
    },
    computed: {
      showBtn(){
        // Determinate if the button to repositories are displayed by the browser's pathname
        return location.pathname === '/'
      }
    }
  }
</script>

<style scoped>

</style>
