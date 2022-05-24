import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Products from '../views/Products.vue'
import Details from '../views/Details.vue'
import Notfound from '../views/Notfound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/details/:lid',
        name: 'details',
        component: Details,
        props: true
    },
    {
        path: '/*',
        name: '404',
        component: Notfound,
        props: true
    },
]

const router = new VueRouter({
    routes
})

export default router
