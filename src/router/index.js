import { createRouter, createWebHistory } from 'vue-router'
// import DashboardView from '@/views/DashboardView.vue'
import EmptyComponent from '@/components/EmptyComponent.vue'
import InventoryView from '@/views/InventoryView.vue'

const future_routes = ['profile', 'sales', 'users'].map((route) => ({
  path: `/${route}`,
  name: route,
  component: EmptyComponent
}))

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: EmptyComponent
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: InventoryView
  },
  ...future_routes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
