import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/in',
    name: 'in',
    component: () => import(/* webpackChunkName: "about" */ '../views/in.vue')
  },
  {
    path: '/out',
    name: 'out',
    component: () => import(/* webpackChunkName: "about" */ '../views/out.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
