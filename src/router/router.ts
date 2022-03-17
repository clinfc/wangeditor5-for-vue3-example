import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Index from '@view/begin.vue'

const routes: RouteRecordRaw[] = [
  {
    name: 'Index',
    path: '/',
    component: Index,
    meta: {
      title: '基础案例',
      component: '/src/view/begin.vue',
    },
  },
  {
    name: 'defaultContent',
    path: '/default-content',
    component: () => import('@view/default-content.vue'),
    meta: {
      title: 'defaultContent',
      component: '/src/view/default-content.vue',
    },
  },
  {
    name: 'defaultHtml',
    path: '/default-html',
    component: () => import('@view/default-html.vue'),
    meta: {
      title: 'defaultHtml',
      component: '/src/view/default-html.vue',
    },
  },
  {
    name: 'enableExtendCache',
    path: '/extend-cache/true',
    component: () => import('@view/extend-cache.vue'),
    meta: {
      title: '使用缓存模式',
      component: '/src/view/extend-cache.vue',
    },
  },
  {
    name: 'disableExtendCache',
    path: '/extend-cache/false',
    component: () => import('@view/extend-cache.vue'),
    meta: {
      title: '禁用缓存模式',
      component: '/src/view/extend-cache.vue',
    },
  },
  {
    name: 'async',
    path: '/async',
    component: () => import('@view/async.vue'),
    meta: {
      title: '在弹窗/抽屉中使用',
      component: '/src/view/async.vue',
    },
  },
  {
    name: 'reloadbofore',
    path: '/reloadbofore',
    component: () => import('@view/reloadbofore.vue'),
    meta: {
      title: 'reloadbofore',
      component: '/src/view/reloadbofore.vue',
    },
  },
  {
    name: 'modelJsonArray',
    path: '/model-json-array',
    component: () => import('@view/model-json-array.vue'),
    meta: {
      title: 'v-model',
      component: '/src/view/model-json-array.vue',
    },
  },
  {
    name: 'modelJsonString',
    path: '/model-json-string',
    component: () => import('@view/model-json-string.vue'),
    meta: {
      title: 'v-model:json',
      component: '/src/view/model-json-string.vue',
    },
  },
  {
    name: 'Form',
    path: '/form',
    component: () => import('@view/form.vue'),
    meta: {
      title: '表单验证',
      component: '/src/view/form.vue',
    },
  },
  {
    name: 'SubmitSync',
    path: '/submit-sync',
    component: () => import('@view/sync-content.vue'),
    meta: {
      title: '强制同步表单数据',
      component: '/src/view/sync-content.vue',
    },
  },
  {
    name: 'Shadow',
    path: '/shadow',
    component: () => import('@view/shadow.vue'),
    meta: {
      title: '增强模式',
      component: '/src/view/shadow.vue',
    },
  },
]

export const ComponentFiles: Map<string, string> = new Map()

export const Menus = routes.map((item) => {
  ComponentFiles.set(item.path, item.meta!.component as string)
  ComponentFiles.set(item.path.replace(/\/$/, ''), item.meta!.component as string)

  return {
    path: item.path,
    title: item.meta!.title,
  } as Record<'path' | 'title', string>
})

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
})

export default router
