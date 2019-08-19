<template>
    <a :target="target" :href="href" :class="color">
        <slot>
            <!-- The link text -->
        </slot>
    </a>
</template>

<script>
  export default {
    name: "GF-link",
    props: ['href', 'color', 'target']
  }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>
