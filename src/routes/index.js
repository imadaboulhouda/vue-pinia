import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/pages/homePage.vue";
import About from "@/pages/aboutPage.vue";
const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
