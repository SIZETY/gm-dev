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
	{
		path: '/left-menu',
		name: 'leftMenu',
		component: () => import('@/views/LeftMenu'),
		children: [
			{
				path: 'path1',
				component: () => import('@/views/LeftMenu/Path1'),
			},
			{
				path: 'path2',
				component: () => import('@/views/LeftMenu/Path2'),
			},
			{
				path: 'path3',
				component: () => import('@/views/LeftMenu/Path3'),
			},
			{
				path: 'video-lib',
				component: () => import('@/views/LeftMenu/VideoLib'),
			},
			{
				path: 'image-lib',
				component: () => import('@/views/LeftMenu/ImageLib'),
			},
			{
				path: 'space/:spaceId/:topicId',
				component: () => import('@/views/LeftMenu/Space'),
			},
			{
				path: 'topic/:topicId',
				component: () => import('@/views/LeftMenu/Topic'),
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () => import('@/views/not-found'),
	},
]

const router = new VueRouter({
	routes,
})

export default router
