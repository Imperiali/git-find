<template>
    <a :href="href" class="green--text">
        <slot></slot>
    </a>
</template>

<script>
  export default {
    name: "GF-link",
    props: ['href']
  }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
