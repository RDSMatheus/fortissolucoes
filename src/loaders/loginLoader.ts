import { redirect } from "react-router";
import { url } from "../services/api";

export async function loginLoader() {
  const response = await fetch(`${url}/api/v1/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (response.ok) throw redirect("/pdv");
  return null;
}
