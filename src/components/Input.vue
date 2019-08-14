<template>
    <form @submit.prevent="fetchUser(userLogin)">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="addon-wrapping">@</span>
            </div>
            <input type="text" class="form-control" placeholder="Github's username"
                   aria-label="Github's username" aria-describedby="button-addon2"
                   v-model="userLogin">
            <div class="input-group-append">
                <button @click="fetchUser(userLogin)" class="btn btn-outline-secondary" type="button"
                        id="button-addon2">Search
                </button>
            </div>
        </div>
    </form>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: "Input"
  }
</script>

<style scoped>

</style>
