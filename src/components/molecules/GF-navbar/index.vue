<template>
    <v-app-bar flat short class="elevation-1">
        <v-toolbar-title>
            <GFLink :color="'primary--text'" :href="'/'" >Git Find</GFLink>
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
