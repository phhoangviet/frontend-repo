"use client";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useAuth } from "../../providers/auth/useAuth";
export const MyHeader = () => {
  const { username } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">EbbudyTechnical</Link>
          </Typography>
          <Typography component={"div"} color="inherit">
            {username ? (
              <Typography component={"p"}>Welcome, {username}</Typography>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MyHeader;
