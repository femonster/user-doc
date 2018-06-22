import Vue from 'vue'
import Router from 'vue-router'
import Register from 'components/register/register'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'register',
        component: Register
    }]
})