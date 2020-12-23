import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/Home'
import A from '../views/A'
import B from '../views/B'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/A',
    name: 'A',
    component: A
  },
  {
    path: '/B',
    name: 'B',
    component: B
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
