import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";

export interface AuthI {
  login: (data: { email: string; password: string }) => Promise<void>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  isLogged: boolean;
  token: string | null;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  return context;
};

export const AuthContext = createContext<null | AuthI>(null);
