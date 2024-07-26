"use client";
import { Router } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export function BackdropSpin({ spinning }: { spinning: boolean }) {
  if (!spinning) {
    return null;
  }

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={spinning}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

const AppLoading = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => {
      setLoading(true);
    };

    const handleRouteDone = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  return (
    <>
      <BackdropSpin spinning={loading} />
      {children}
    </>
  );
};

export default AppLoading;
