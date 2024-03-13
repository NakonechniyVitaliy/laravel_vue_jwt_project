<script>
export default {
    name: "App"
}
</script>

<template>
    <div class="mt-4" style="margin-left: 2vw">
        <router-link to="/fruits">List</router-link><br>
        <router-link to="/users/registration">Registration</router-link><br>
        <router-link to="/users/login">Login</router-link><br>
        <router-link to="/users/personal">Personal</router-link><br>
        <router-view></router-view>
    </div>
</template>

<style>

</style>
