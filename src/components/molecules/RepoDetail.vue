<template>
    <v-flex md5 class="ma-2">
        <v-card min-height="120">
            <v-card-title class="justify-space-between">
                <GFLink :href="repo.html_url">{{repo.name}}</GFLink>
                <v-chip outlined color="green">
                    <v-avatar left>
                        {{repo.stargazers_count}}
                    </v-avatar>
                    Stars
                </v-chip>
            </v-card-title>
            <v-card-text v-if="repo.description">
                {{repo.description}}
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
  import GFLink from "../atoms/GF-link/index";
  export default {
    name: "RepoDetail",
    components: {GFLink},
    props: ['repo']
  }
</script>

<style scoped>

</style>
