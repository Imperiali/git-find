<template>
    <v-card-title class="headline mb-1">
        <v-layout>
            <slot name="title"></slot>
        </v-layout>
        <v-layout class="justify-end">
            <slot name="extra"></slot>
        </v-layout>
    </v-card-title>
</template>

<script>
  export default {
    name: "GF-card-title",
    props: ['title']
  }
</script>

<style scoped>

</style>
