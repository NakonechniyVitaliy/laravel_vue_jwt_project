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
        {
            path: '/.*',
            name: '404',
            component: () => import('../components/User/Personal.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    const access_token = localStorage.getItem('access_token')

    if (!access_token) {
        if (to.name === 'users.login' || to.name === 'users.registration') {
            return next()
        } else {
            return next({
                name: 'users.login'
            })
        }
    }
    if (to.name === 'users.login' && access_token){
        return next({
            name: 'users.personal'
        })
    }

    next();
})

export default router
