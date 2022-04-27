import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/components/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../../src/components/About.vue')
		},
		{
			path: '/skill',
			component: () => import('../../src/components/Skill.vue')
		},
		{
			path: '/project',
			component: () => import('../../src/components/Project.vue')
		},
		{
			path: '/contact',
			component: () => import('../../src/components/Contact.vue')
		},
		{
			path: '/setting',
			component: () => import('../../src/components/Setting.vue')
		},
	],
})

export default router