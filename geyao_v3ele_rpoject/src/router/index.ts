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
    path: '/index',
    component: () => import('../views/Layout/index.vue'),
    name: 'Index',
    meta: {
      hidden: true,
    },
    children: [
      {
        path: '/index/user',
        component: () => import('../views/User/index.vue'),
        name: 'User',
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