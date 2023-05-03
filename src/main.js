import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { firebaseApp } from './utils/connections';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import { VueFire, VueFireAuth } from 'vuefire';
import { IonicVue } from '@ionic/vue';

const modules = [VueFireAuth()];
const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(IonicVue);
app.use(pinia);
app.use(router);
app.use(VueFire, { firebaseApp, modules });

router.isReady().then(() => {
  app.mount('#app');
});
