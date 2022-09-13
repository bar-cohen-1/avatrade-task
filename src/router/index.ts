import { createRouter, createWebHistory } from "vue-router";
import DepositView from "@views/DepositView.vue";
import store from "@store/index";
import "./types";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/deposit",
      name: "deposit",
      component: DepositView, // Main view
      meta: { requiresAuth: true },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@views/LoginView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/deposit",
    },
  ],
});

router.beforeEach(async (to) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    return "/login";
  }
});

export default router;
