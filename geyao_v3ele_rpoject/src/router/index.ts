import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('../views/Login/index.vue'),
    name: 'Login',
    meta: {
      hidden: true,
    }
  },
  {
    path: '/',
    component: () => import('../views/Layout/index.vue'),
    name: 'Index',
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/user',
        component: () => import('../views/User/index.vue'),
        name: 'User',
        meta: {
          hidden: true,
        },
      },
      {
        path: '/school',
        component: () => import('../views/School/index.vue'),
        name: 'Schhol',
        meta: {
          hidden: true,
        },
      },
      {
        path: '/tags',
        component: () => import('../views/Tags/index.vue'),
        name: 'Tags',
        meta: {
          hidden: true,
        },
      },
      {
        path: '/dialog',
        component: () => import('../views/Dialog/index.vue'),
        name: 'Dialog',
        meta: {
          hidden: true,
        },
      }
    ]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}
export default router