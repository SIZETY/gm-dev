import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import EleDemo from '@/views/EleDemo'
import Drag from '@/views/Drag'

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
  {
    path: '/drag',
    name: 'drag',
    component: Drag,
  },
]

const router = new VueRouter({
  routes,
})

export default router
