import { AuthState } from "@type/index";

export const clearAuthStorage = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userId");
};

export const syncAuthStorage = (auth: AuthState) => {
  if (!auth?.token || !auth?.userId) {
    clearAuthStorage();
  } else {
    localStorage.setItem("authToken", auth.token);
    localStorage.setItem("userId", auth.userId.toString());
  }
};
