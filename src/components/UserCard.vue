<template>
    <div class="card">
        <div class="card-header">
            Featured
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-lg-3 col-md-5 col-sm-12">
                    <img src="../assets/logo.png" class="" alt="">
                </div>
                <div class="col-lg-9 col-md-7 col-sm-12">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional
                        content.</p>
                    <router-link btn btn-primary :to="user.login" tag="a">Go to repositories!</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import user from '../../tests/mock/mock-user'

  export default {
    name: "UserDetails",
    data(){
      return {
        user
      }
    }
  }
</script>

<style scoped>

</style>
