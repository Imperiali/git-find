<template>
    <v-flex md5 class="ma-2">
        <v-card min-height="120">
            <GFCardTitle>
                <template v-slot:title>
                    <GFLink class="" :color="'primary--text'" :href="repo.html_url">{{repo.name}}</GFLink>
                </template>
                <template v-slot:extra>
                    <GFChip :color="'primary'">
                        <template v-slot:avatar>{{repo.stargazers_count}}</template>
                        <template v-slot:description>
                            <v-icon small>mdi-star</v-icon>
                        </template>
                    </GFChip>
                </template>
            </GFCardTitle>
            <v-card-text v-if="repo.description">
                {{repo.description}}
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
  import GFLink from "../../atoms/GF-link/index";
  import GFChip from "../../atoms/GF-chip/index";
  import GFCardTitle from "../Gf-card-title/index";

  export default {
    name: "RepoDetail",
    components: {GFCardTitle, GFChip, GFLink},
    props: ['repo']
  }
</script>

<style scoped>

</style>
