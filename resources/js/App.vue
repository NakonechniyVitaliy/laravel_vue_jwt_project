<script>
import api from "@/api.js";
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
        },
        logout(){
            api.post('api/auth/logout')
                .then(res =>{
                    localStorage.removeItem('access_token')
                    this.$router.push({name: 'users.login'})
                })
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
        <a href="#" v-if="access_token" @click.prevent='logout()' style="margin-left: 0.5vw">Logout</a>
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<style>

</style>
