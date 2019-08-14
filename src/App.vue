<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
</style>
<script>
  import Navbar from "./components/Navbar";
  export default {
    components: {Navbar}
  }
</script>
