import { createRouter, createWebHistory } from "vue-router";

import localRoutes from "./localRoutes"

import remoteRoutes from "./remoteRoutes";


const routes = [
  ...localRoutes,
  ...remoteRoutes
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
