import { State } from "@store/types";

export const getInitialState = (): State => ({
  auth: {
    token: null,
    userId: null,
  },
});
