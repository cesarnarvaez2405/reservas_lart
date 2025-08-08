import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "reservacion",
    component: () => import("../views/reservacion/index.vue"),
    meta: {
      requireAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: () => ({ name: "reservacion" }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
