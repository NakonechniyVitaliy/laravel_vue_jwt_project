<script>
export default {
    data(){
        return{
            email: null,
            password: null,
            error: null
        }
    },
    methods:{
      login(){
          axios.post('/api/auth/login',{
              email: this.email,
              password: this.password,
          }).then(res =>{
              localStorage.setItem('access_token', res.data.access_token)
              this.$router.push({name: 'users.personal'})
          }).catch(error => {
              this.error = error.response.data.error
          })
      }
    },
}
</script>

<template>
    <div class="w-25">
        <input v-model="email" class="form-control mt-2" placeholder="email" type="email">
        <input v-model="password" class="form-control mt-2" placeholder="password" type="password">
        <div class="text-danger" v-if="error">{{ this.error }}</div>
        <input @click.prevent='login()' class="btn btn-primary mt-2" value="Submit" type="submit" >
    </div>
</template>

<style>

</style>
