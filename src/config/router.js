import Vue from 'vue'
import VueRouter from 'vue-router'
import Charts from '../components/Charts'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'Charts',
        component: Charts
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
