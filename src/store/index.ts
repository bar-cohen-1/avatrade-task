import { createStore } from "vuex";

import { AuthState, LoginForm, State } from "@type/index";
import { LocalStorageService } from "@services/localStorage";
import { loginRequest } from "@api/index";
import { resetState } from "@store/resetState";
import { initialState } from "@store/initialState";
import { STORAGE } from "@constants/storage";

// Create store
export default createStore<State>({
  state: initialState,
  actions: {
    async login(context, payload: LoginForm) {
      const loginData: AuthState = await loginRequest(payload);
      context.commit("setAuth", loginData);
    },
    logout(context) {
      context.commit("setAuth", resetState());
    },
  },
  mutations: {
    setAuth(state, payload?: AuthState) {
      if (payload) {
        state.auth = payload;
        LocalStorageService.set(STORAGE.APP_STATE, state);
      } else {
        state = resetState();
        LocalStorageService.remove(STORAGE.APP_STATE);
      }
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
