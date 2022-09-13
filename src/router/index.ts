import { createRouter, createWebHistory } from "vue-router";

import "@router/types";
import store from "@store/index";
import { LOGIN_PATH, DEPOSIT_PATH } from "@constants/url";
import DepositView from "@views/DepositView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: DEPOSIT_PATH,
      name: "deposit",
      component: DepositView, // Main view
      meta: { requiresAuth: true },
    },
    {
      path: LOGIN_PATH,
      name: "login",
      component: () => import("@views/LoginView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: DEPOSIT_PATH,
    },
  ],
});

router.beforeEach(async (to) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    return LOGIN_PATH;
  }
});

export default router;
