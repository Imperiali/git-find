<template>
    <v-app id="app">
        <v-content>
            <Navbar/>
            <router-view/>
        </v-content>
    </v-app>
</template>

<style lang="scss">
</style>
<script>
  import Navbar from "./components/Navbar";

  export default {
    components: {Navbar}
  }
</script>
