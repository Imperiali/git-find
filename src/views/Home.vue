<template>
    <div class="home">
        <div class="jumbotron">
            <h1 class="display-4">Hey, welcome!</h1>
            <p class="lead">This is a simple github users search! Type down and find some users and there repos! Don't
                forget to help the community! ;)</p>
            <hr class="my-4">
            <Input/>
            <UserDetails :user="{...user}"/>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import user from '../../tests/mock/mock-user'

  import Input from "../components/Input";
  import UserDetails from "../components/UserCard";

  export default {
    name: 'home',
    components: {UserDetails, Input},
    data() {
      return {
        user
      }
    },
  }
</script>
