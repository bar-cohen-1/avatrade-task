import { AuthState } from "@store/types";
import { AUTH_API_URL } from "@constants/url";

type LoginForm = string; // TODO: import from original declaration
interface UserResponse {
  id: number;
}

/**
 * Call a fake API and return a fake response on success
 */
export const loginRequest = async (body: LoginForm): Promise<AuthState> => {
  const response = await fetch(AUTH_API_URL, {
    method: "POST",
    body: JSON.stringify(body),
  });
  const data: UserResponse = await response.json();
  return { userId: data.id, token: "abcde" };
};
