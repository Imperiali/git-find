<template>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Github's username"
               aria-label="Github's username" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Input"
  }
</script>

<style scoped>

</style>
