<template>
    <v-btn @click="$emit('click')"
           :block="block"
           :color="color"
           :outlined="outlined"
           :slot="append"
           :text="text">
        <slot>
            <!-- The button text -->
        </slot>
    </v-btn>
</template>

<script>
  export default {
    name: "GF-btn",
    props: ['color', 'outlined', 'append', 'text', 'block']
  }
</script>

<style scoped>

</style>
