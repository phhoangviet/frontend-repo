import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
// 'use client'
export const MyHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">EbbudyTechnical</Link>
          </Typography>
          <Typography component={"div"} color="inherit">
            <Link href="/login">Login</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default MyHeader;
