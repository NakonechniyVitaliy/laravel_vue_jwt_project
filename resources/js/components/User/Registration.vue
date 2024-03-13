<script>
    export default {
        data(){
            return{
                name: null,
                email: null,
                password: null,
                password_confirmation: null
            }
        },
        methods:{
          registration(){
              axios.post('/api/users', {
                  name: this.name,
                  email: this.email,
                  password: this.password,
                  password_confirmation: this.password_confirmation,
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
        <input v-model="name" class="form-control mt-2" placeholder="Name" type="text">
        <input v-model="email" class="form-control mt-2" placeholder="Email" type="email">
        <input v-model="password" class="form-control mt-2" placeholder="Password" type="password">
        <input v-model="password_confirmation" class="form-control mt-2" placeholder="Password confirmation" type="password">
        <input @click.prevent='registration()' class="btn btn-primary mt-2" value="Submit" type="submit" >
    </div>
</template>

<style>

</style>
