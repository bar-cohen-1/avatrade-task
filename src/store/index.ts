import { createStore } from "vuex";

import { AuthState, State } from "./types";
import { clearAuthStorage, getInitialState } from "./helpers";

export default createStore<State>({
  state: getInitialState,
  actions: {
    login() {
      // Login logic
    },
    logout(context) {
      context.commit("setAuth", getInitialState());
    },
  },
  mutations: {
    setAuth(state, payload: AuthState) {
      state.auth = payload;
      clearAuthStorage();
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
