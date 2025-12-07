import type { SignUp } from "../types/auth";

const url = import.meta.env.API_URL || "http://localhost:3000";

export const SIGNUP = (data: SignUp) => {
  return {
    url: `${url}/api/v1/signup`,
    options: {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    },
  };
};
