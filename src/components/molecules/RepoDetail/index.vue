<template>
    <v-flex md5 class="ma-2">
        <v-card min-height="120">
            <v-card-title class="justify-space-between">
                <GFLink :color="'primary--text'" :href="repo.html_url">{{repo.name}}</GFLink>
                <GFChip :color="'primary'">
                    <template v-slot:avatar>{{repo.stargazers_count}}</template>
                    <template v-slot:description>Stars</template>
                </GFChip>
            </v-card-title>
            <v-card-text v-if="repo.description">
                {{repo.description}}
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
  import GFLink from "../../atoms/GF-link/index";
  import GFChip from "../../atoms/GF-chip/index";
  export default {
    name: "RepoDetail",
    components: {GFChip, GFLink},
    props: ['repo']
  }
</script>

<style scoped>

</style>
