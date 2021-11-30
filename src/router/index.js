import { createRouter, createWebHistory } from "vue-router";
import Auth from "../views/Auth";
import Overview from "../views/Overview.vue";

const routes = [
  {
    path: "/",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/overview",
    name: "Overview",
    component: Overview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
