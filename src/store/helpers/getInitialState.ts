import { State } from "@type/index";

export const getInitialState = (): State => ({
  auth: {
    token: null,
    userId: null,
  },
});
