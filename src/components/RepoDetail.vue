<template>
    <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <ul class="list-group list-group-horizontal-md">
                <li class="list-group-item"><a target="_blank" :href="repo.html_url" class=""> {{repo.name}} </a></li>
                <li class="list-group-item" v-if="repo.description">{{repo.description}}</li>
            </ul>
            <span class="badge badge-primary badge-pill">{{repo.stargazers_count}}</span>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "RepoDetail",
    props: ['repo']
  }
</script>

<style scoped>

</style>
