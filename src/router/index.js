import { createRouter, createWebHistory } from 'vue-router'; 
import LandingPage from '@/components/LandingPage.vue';

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
      },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

