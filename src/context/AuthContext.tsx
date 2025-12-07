import { useCallback, useState, type ReactNode } from "react";
import { AuthContext } from "../hooks/useAuth";
import { LOGIN } from "../services/api";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState<"" | null>(null);

  const login = useCallback(
    async (data: { email: string; password: string }) => {
      try {
        const { options, url } = LOGIN(data);
        const response = await fetch(url, options);

        if (!response.ok) throw new Error("Não foi possivel realizar login.");

        const json = await response.json();

        setToken(json.accessToken);
        setIsLogged(true);
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  return (
    <AuthContext.Provider value={{ login, isLogged, setIsLogged, token }}>
      {children}
    </AuthContext.Provider>
  );
};
