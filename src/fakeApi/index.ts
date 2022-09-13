import { AuthState } from "@store/types";

type LoginForm = string;

/**
 * Call a fake API and return a fake response on success
 */
export const loginRequest = async (body: LoginForm): Promise<AuthState> => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
    }); // Fake call to fake API

    if (request.ok) {
      return { userId: 1, token: "abcde" };
    } else {
      throw new Error(
        "Login request failed with status code " + request.status
      );
    }
  } catch (err) {
    throw err;
  }
};
