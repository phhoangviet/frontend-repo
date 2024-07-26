"use client";
import React, { useContext } from "react";

export const AppLoadingContext = React.createContext<{
  setAppLoading: (_load: boolean) => void;
}>({
  setAppLoading: () => {},
});

export const useAppLoading = () => useContext(AppLoadingContext);
