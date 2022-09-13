import { Store } from "vuex";
import "vue-router";

// State

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

// Forms

export interface LoginForm {
  username: string;
  password: string;
}

export interface DepositForm {
  creditCard: string;
  expiredDate: string;
  cvv: string;
}

// Store

// provide typings for `this.$store`
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

// Router

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth: boolean;
  }
}
