import { createRouter, createWebHistory } from 'vue-router'; 
import LandingPage from '@/components/LandingPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import HomePage from '@/components/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
      },
      {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage,
      },

      {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
      },
      {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
      },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

