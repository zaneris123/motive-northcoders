import { createRouter, createWebHistory } from "@ionic/vue-router";
import MapView from "../views/MapView.vue";
import ListView from "../views/ListView.vue";
import SingleLocationView from "../views/SingleLocationView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "",
    redirect: "/map",
  },
  {
    path: "/map",
    name: "Map",
    component: MapView,
  },
  {
    path: "/locations",
    name: "Locations List",
    component: ListView,
  },
  {
    path: "/about",
    name: "About Us",
    component: AboutView,
  },
  {
    path: "/locations/:location_id",
    name: "Single Location",
    component: SingleLocationView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
