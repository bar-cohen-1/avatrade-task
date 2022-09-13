import { AuthState } from "@store/types";

export const clearAuthStorage = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
};

export const syncAuthStorage = (auth: AuthState) => {
  if (auth.token === null) {
    clearAuthStorage();
  } else {
    localStorage.setItem("authToken", auth.token);
    localStorage.setItem("userId", auth.userId.toString());
  }
};
