import { createWebHashHistory, createRouter } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
