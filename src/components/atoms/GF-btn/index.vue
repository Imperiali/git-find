<template>
    <v-btn @click="$emit('click')"
           :color="color"
           :outlined="outlined"
           :slot="append">
        <slot></slot>
    </v-btn>
</template>

<script>
  export default {
    name: "GF-btn",
    props: ['color', 'outlined', 'append']
  }
</script>

<style scoped>

</style>
