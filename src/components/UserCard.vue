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
    <!--    <div class="card">-->
    <!--        <div class="card-header">-->
    <!--            {{user.login}}-->
    <!--        </div>-->
    <!--        <div class="card-body">-->
    <!--            <div class="row">-->
    <!--                <div class="col-lg-3 col-md-5 col-sm-12">-->
    <!--                    <img :src="user.avatar_url" class="img-fluid" alt="">-->
    <!--                </div>-->
    <!--                <div class="col-lg-9 col-md-7 col-sm-12">-->
    <!--                    <h5 v-if="user.email" class="card-title">{{user.email}}</h5>-->
    <!--                    <h5 v-else class="card-title">No e-mail avaliable :(</h5>-->
    <!--                    <span class="badge badge-secondary">{{user.followers}} Followers</span> |-->
    <!--                    <span class="badge badge-secondary">Following {{user.following}}</span>-->
    <!--                    <p class="card-text">{{user.bio}}</p>-->
    <!--                    <a class="btn btn-primary" @click="toRepositories">Go to repositories!</a>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
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
