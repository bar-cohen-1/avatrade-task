import { createRouter, createWebHistory } from "vue-router";

import store from "@store/index";
import { URL } from "@constants/url";
import DepositView from "@views/DepositView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: URL.deposit,
      name: "deposit",
      component: DepositView, // Main view
      meta: { requiresAuth: true },
    },
    {
      path: URL.login,
      name: "login",
      component: () => import("@views/LoginView.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: URL.deposit,
    },
  ],
});

router.beforeEach(async (to) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.meta.requiresAuth && !isAuthenticated) {
    return URL.login;
  }
});

export default router;
