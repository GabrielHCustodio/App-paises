import { createRouter, createWebHistory } from 'vue-router'
import Country from '@/components/Country.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
      path: '/:name',
      name: 'country',
      component: Country,
      props: true
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
