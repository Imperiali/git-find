<template>
    <v-chip
            :outlined="outlined"
            :color="color"
            class="justify-space-between align-content-center">
        <slot name="avatar">
            <!-- The first element, maybe a icon, a word, but small thing -->
        </slot>
        <slot name="description">
            <!-- A short description, a word, nothing too big -->
        </slot>
    </v-chip>
</template>

<script>
  export default {
    name: "GF-chip",
    props: ['outlined', 'color']
  }
</script>

<style scoped>

</style>
