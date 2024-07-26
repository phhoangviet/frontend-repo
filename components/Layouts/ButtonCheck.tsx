"use client";

import { Button } from "@mui/material";
import { useAuth } from "../../providers/auth/useAuth";
import { useState } from "react";
import { useToast } from "../../providers/toast/useToast";
import { getUser } from "../../apis/userApi";
import { useAppLoading } from "../../providers/loading/useAppLoading";
import { useEffect } from "react";

export const ButtonCheck = ({ user }: { user: { data: any } | undefined }) => {
  const { username, setLogged } = useAuth();
  const { setAppLoading } = useAppLoading();
  // const [username, setUsername] = useState<string>(user?.data?.username || "");
  // useEffect(() => {
  //   setLogged(user?.data?.username);
  //   setUsername(user?.data?.username);
  // }, [user, setLogged]);
  const { success, error } = useToast();
  const handleCheck = async () => {
    setAppLoading(true);
    const data = await fetch("/api");
    if (data) {
      success("You logged");
      setAppLoading(false);
    } else {
      error("You not logged");
      setAppLoading(false);
    }
  };
  return (
    <Button variant="contained" onClick={handleCheck}>
      Check me now!
    </Button>
  );
};
