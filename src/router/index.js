import Vue from 'vue'
import Router from 'vue-router'
import Register from 'components/register/register'
import Doconfig from 'components/doctor/doconfig'
import Doctor from 'components/doctor/doctor'
import Nuconfig from 'components/nurse/nuconfig'
import Personal from 'components/personal/personal'
import Notice from 'components/notice/notice-list'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'register',
        component: Register
    }, {
        path: '/doconfig',
        name: 'doconfig',
        component: Doconfig
    }, {
        path: '/nuconfig',
        name: 'nuconfig',
        component: Nuconfig
    }, {
        path: '/doctor',
        name: 'doctor',
        component: Doctor
    }, {
        path: '/personal',
        name: 'personal',
        component: Personal
    }, {
        path: '/notice',
        name: 'notice',
        component: Notice
    }]
})