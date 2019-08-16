<template>
    <v-row justify="center">
        <v-progress-circular
                indeterminate
                size="120"
                :color="color"
        ></v-progress-circular>
    </v-row>
</template>

<script>
  export default {
    name: "GF-Loading",
    props:['color']
  }
</script>

<style scoped>

</style>
