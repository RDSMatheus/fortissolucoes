import type { SignUp } from "../types/auth";

export const url = import.meta.env.API_URL || "http://localhost:3000";

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

export const LOGIN = (data: {
  email: string;
  password: string;
}): {
  url: string;
  options: RequestInit;
} => {
  return {
    url: `${url}/api/v1/login`,
    options: {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "POST",
    },
  };
};
