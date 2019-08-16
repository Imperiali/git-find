<template>
    <v-chip
            :outlined="outlined"
            :color="color">
        <v-avatar
                left>
            <slot name="avatar"></slot>
        </v-avatar>
        <slot name="description"></slot>
    </v-chip>
</template>

<script>
  export default {
    name: "GF-chip",
    props:['outlined', 'color']
  }
</script>

<style scoped>

</style>
