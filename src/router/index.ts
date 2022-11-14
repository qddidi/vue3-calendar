import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '../view/Home.vue'),
        meta: {
            keepAlive: true,
        }
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "Home" */ '../view/detial/index.vue')
    },
    {
        path: '/push',
        name: 'push',
        component: () => import(/* webpackChunkName: "push" */ '../view/push/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    routes
})

export default router