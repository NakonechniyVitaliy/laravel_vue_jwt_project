<script>
import api from "@/api.js";

    export default {
        data() {
            return {
                fruits: [],
            }
        },
        mounted() {
            this.getFruits()
        },
        methods: {
            getFruits() {
                api.get('/api/auth/fruits')
                    .then(res => {
                        this.fruits = res.data.data
                    })
            },
        }
    }
</script>

<template>
<div>
    <table class="table w-25" >
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="fruit in fruits">
            <th scope="row">{{ fruit.id }}</th>
            <td>{{ fruit.name }}</td>
            <td>${{ fruit.price }}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<style>

</style>
