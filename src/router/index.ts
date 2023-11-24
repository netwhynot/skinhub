import { createRouter, createWebHistory } from "vue-router";
import player from "@/components/player.vue";

const webHistory = createWebHistory();
const routes = [
  { path: "/skinhub", redirect: "/skinhub/pomah" },
  {
    path: "/skinhub/:username",
    component: player
  }
];

export const router = createRouter({
  routes,
  history: webHistory
});
