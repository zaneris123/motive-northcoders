import { createApp } from 'vue';

import { createPinia } from 'pinia';
import { firebaseApp } from './utils/connections';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import { VueFire, VueFireAuth } from 'vuefire';
import { IonicVue } from '@ionic/vue';

const modules = [VueFireAuth()];
const app = createApp(App);

app.use(IonicVue);
app.use(createPinia());
app.use(router);
app.use(VueFire, { firebaseApp, modules });

router.isReady().then(() => {
  app.mount('#app');
});
