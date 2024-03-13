<script>
export default {
    name: "App",

    data(){
        return{
            access_token: null
        }
    },
    mounted() {
        this.getAcessToken()
    },

    updated() {
        this.getAcessToken()
    },

    methods: {
        getAcessToken(){
            this.access_token = localStorage.getItem('access_token')
        }
    },
}
</script>

<template>
    <div class="mt-4" style="margin-left: 2vw">
        <router-link v-if="access_token" to="/fruits" style="margin-left: 0.5vw">List</router-link>
        <router-link v-if="!access_token" to="/users/registration" style="margin-left: 0.5vw">Registration</router-link>
        <router-link v-if="!access_token" to="/users/login" style="margin-left: 0.5vw">Login</router-link>
        <router-link v-if="access_token" to="/users/personal" style="margin-left: 0.5vw">Personal</router-link>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<style>

</style>
