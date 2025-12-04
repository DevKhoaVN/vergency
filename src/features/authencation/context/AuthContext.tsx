import { createContext, useCallback, useContext, type ReactNode } from "react";
import type { AuthContextType } from "../type";
import { useAuth } from "../hook/useAuth";

// define context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // get data from hook
  const { user, isLoading, loginAsync, registerAsync, isAuthencated } =
    useAuth();

  const value = {
    user,
    isLoading,
    login: loginAsync,
    register: registerAsync,
    isAuthencated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return context;
};
