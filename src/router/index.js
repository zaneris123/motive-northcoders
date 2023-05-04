import { createRouter, createWebHistory } from '@ionic/vue-router';
import MapView from '../views/MapView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MapView
    }
  ]
});

export default router;
