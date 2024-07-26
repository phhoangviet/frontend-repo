"use client";

import { ReactNode } from "react";
import { AppLoadingContext } from "./useAppLoading";
import { useState } from "react";
import { BackdropSpin } from "./AppLoading";

export const AppLoadingProvider = ({ children }: { children: ReactNode }) => {
  const [load, setLoading] = useState<boolean>(false);
  const setAppLoading = (_load: boolean) => setLoading(_load);
  return (
    <AppLoadingContext.Provider value={{ setAppLoading }}>
      <BackdropSpin spinning={load}></BackdropSpin>
      {children}
    </AppLoadingContext.Provider>
  );
};
