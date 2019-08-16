<template>
    <a :href="href" :class="color">
        <slot>
            <!-- The link text -->
        </slot>
    </a>
</template>

<script>
  export default {
    name: "GF-link",
    props: ['href', 'color']
  }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
