import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import EleDemo from '@/views/EleDemo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/eledemo',
    name: 'eledemo',
    component: EleDemo,
  },
]

const router = new VueRouter({
  routes,
})

export default router
