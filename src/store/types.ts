import { Store } from "vuex";

export interface AuthStateLoggedOut {
  token: null;
  userId: null;
}
export interface AuthStateLoggedIn {
  token: string;
  userId: number;
}
export type AuthState = AuthStateLoggedOut | AuthStateLoggedIn;

export interface State {
  auth: AuthState;
}

// provide typings for `this.$store`
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
