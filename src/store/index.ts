import { createStore } from "vuex";

import { AuthState, LoginForm, State } from "@type/index";
import { loginRequest } from "@api/index";
import { resetState, syncAuthStorage } from "@store/helpers";

// Initial state
const initialState: State = resetState();
if (localStorage.getItem("authToken")) {
  initialState.auth = {
    token: localStorage.getItem("authToken")?.toString(),
    userId: Number(localStorage.getItem("userId")),
  };
}

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
