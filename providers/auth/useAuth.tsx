"use client";
import React, { useContext } from "react";

export const AuthContext = React.createContext<{
  username: string;
  setLogged: (_username: string) => void;
}>({
  username: "",
  setLogged: () => {},
});

export const useAuth = () => useContext(AuthContext);
