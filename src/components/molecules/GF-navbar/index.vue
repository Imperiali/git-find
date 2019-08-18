<template>
    <v-app-bar flat short class="primary elevation-1">
        <v-toolbar-title>
            <GFLink :color="'white--text'" :href="'/'" >Git Find</GFLink>
        </v-toolbar-title>
    </v-app-bar>
</template>

<script>
  import GFLink from "../../atoms/GF-link/index";
  export default {
    name: "GF-navbar",
    components: {GFLink}
  }
</script>

<style scoped>

</style>
