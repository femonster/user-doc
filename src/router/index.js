import Vue from 'vue'
import Router from 'vue-router'
import Register from 'components/register/register'

import Doconfig from 'components/doctor/doconfig'
import Doctor from 'components/doctor/doctor'

import Nurse from 'components/nurse/nurse'
import Nuconfig from 'components/nurse/nuconfig'

import Personal from 'components/personal/personal'
import Refund from 'components/personal/refund'
import Detail from 'components/personal/person_detail'
import Address from 'components/personal/address'
import Mdetail from 'components/personal/money_detail'

import Notice from 'components/notice/notice-list'
import AddNotice from 'components/notice/add-notice'


import Patient from 'components/history/Patient'
import HistoryList from 'components/history/history-list'
import History from 'components/history/history'

import Start from 'components/now/start'
import Write from 'components/now/write'

import Consult from 'components/consult/consult'
import ConsultList from 'components/consult/consult_list'
import ConsultDetail from 'components/consult/consult_detail'

import Report from 'components/report/report'
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
    }, {
        path: '/add_notice',
        name: 'add_notice',
        component: AddNotice
    }, {
        path: '/refund',
        name: 'refund',
        component: Refund
    }, {
        path: '/patient',
        name: 'patient',
        component: Patient
    }, {
        path: '/list/:id',
        name: 'historyList',
        component: HistoryList
    }, {
        path: '/history',
        name: 'history',
        component: History
    }, {
        path: '/start',
        name: 'start',
        component: Start
    }, {
        path: '/write',
        name: 'write',
        component: Write
    }, {
        path: '/consult',
        name: 'consult',
        component: Consult
    }, {
        path: '/conlist',
        name: 'conlist',
        component: ConsultList
    }, {
        path: '/condetail',
        name: 'condetail',
        component: ConsultDetail
    }, {
        path: '/nurse',
        name: 'nurse',
        component: Nurse
    }, {
        path: '/pdetail',
        name: 'pdetail',
        component: Detail
    },{
        path: '/address',
        name: 'address',
        component: Address
    },{
        path: '/mdetail',
        name: 'mdetail',
        component: Mdetail
    },{
        path: '/report',
        name: 'report',
        component: Report
    } ]
})