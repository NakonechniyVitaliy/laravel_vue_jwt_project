import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/fruits',
            name: 'fruit.index',
            component: () => import('../components/Fruits/Index.vue')
        },
        {
            path: '/users/registration',
            name: 'users.registration',
            component: () => import('../components/User/Registration.vue')
        },
        {
            path: '/users/login',
            name: 'users.login',
            component: () => import('../components/User/Login.vue')
        },
        {
            path: '/users/personal',
            name: 'users.personal',
            component: () => import('../components/User/Personal.vue')
        },
    ]
})

export default router
