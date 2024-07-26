"use client";

import { ReactNode } from "react";
import { AuthContext } from "./useAuth";
import { useState } from "react";

export const AuthProvider = ({
  username,
  children,
}: {
  username?: string;
  children: ReactNode;
}) => {
  const [userLogged, setUserLogged] = useState<string>(username || "");
  const handleSetLogged = (_username: string) => {
    setUserLogged(_username);
  };
  return (
    <AuthContext.Provider
      value={{ username: userLogged, setLogged: handleSetLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};
