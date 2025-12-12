import { createRouter, createWebHistory, type RouteRecordRaw, type RouteComponent } from 'vue-router'

type PageModule = { default: RouteComponent }

const pages = import.meta.glob<PageModule>('../pages/**/*.vue')

const toRoutePath = (filePath: string) => {
  const withoutBase = filePath.replace('../pages', '')
  const withoutExt = withoutBase.replace(/\.vue$/, '')
  const normalized = withoutExt.replace(/\/index$/i, '')
  return normalized === '' ? '/' : normalized
}

const routes: RouteRecordRaw[] = Object.entries(pages).map(([filePath, component]) => ({
  path: toRoutePath(filePath),
  component,
}))

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router

