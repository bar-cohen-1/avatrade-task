import { createStore } from "vuex";

import { AuthState, LoginForm, State } from "@type/index";
import { loginRequest } from "@api/index";
import { getInitialState, syncAuthStorage } from "@store/helpers";

export default createStore<State>({
  state: getInitialState,
  actions: {
    async login(context, payload: LoginForm) {
      const loginData: AuthState = await loginRequest(payload);
      context.commit("setAuth", loginData);
    },
    logout(context) {
      context.commit("setAuth", getInitialState());
    },
  },
  mutations: {
    setAuth(state, payload: AuthState) {
      state.auth = payload;
      syncAuthStorage(payload);
    },
  },
  getters: {
    userId(state) {
      return state.auth.userId;
    },
    token(state) {
      return state.auth.token;
    },
    isAuthenticated(state) {
      return !!state.auth.token;
    },
  },
});
