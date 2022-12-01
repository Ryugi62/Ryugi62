import { createRouter, createWebHistory } from "vue-router";
import WeightGraph from "../views/WeightGraph.vue";

const routes = [
  {
    path: "/",
    name: "WeightGraph",
    component: WeightGraph,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
