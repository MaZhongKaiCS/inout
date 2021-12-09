import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'firstPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/first-page.vue')
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
