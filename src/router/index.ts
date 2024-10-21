import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/SearchPage.vue')
    },
    {
      path: '/proyecto',
      name: 'proyecto',
      component: () => import('../pages/ProyectPage.vue')
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: () => import('../pages/ReportPage.vue')
    }
  ]
})

export default router