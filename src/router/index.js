import { createRouter, createWebHistory } from '@ionic/vue-router';
import MapView from '../views/MapView.vue';
import LoginView from '../views/loginView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MapView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    }
  ]
});

export default router;
