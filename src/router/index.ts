import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

const router = createRouter({
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/proyecto',
      name: 'proyecto',
      component: () => import('../components/ProyectPage.vue')
    },
    {
      path: '/reportes',
      name: 'reportes',
      component: () => import('../components/ReportPage.vue')
    }
  ]
})

export default router