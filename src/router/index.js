import { createRouter, createWebHistory } from '@ionic/vue-router';
import MapView from '../views/MapView.vue';
import SingleLocationView from '../views/SingleLocationView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MapView
    },
    {
      path: '/locations/:location_id',
      name: 'singleLocation',
      component: SingleLocationView
    }
  ]
});

export default router;
