<template>
    <div class="user-details">
        {{login}} {{ followers }} {{ following}}{{ bio}} {{email}} {{avatar_url}}
    </div>
</template>

<script>
  export default {
    name: "UserDetails",
    props: ['login', 'followers', 'following', 'bio', 'email', 'avatar_url']
  }
</script>

<style scoped>

</style>
