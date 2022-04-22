import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../../src/views/About.vue')
		},
		{
			path: '/skill',
			component: () => import('../../src/views/Skill.vue')
		},
		{
			path: '/project',
			component: () => import('../../src/views/Project.vue')
		},
		{
			path: '/contact',
			component: () => import('../../src/views/Contact.vue')
		},
		{
			path: '/setting',
			component: () => import('../../src/views/Setting.vue')
		},
	],
})

export default router