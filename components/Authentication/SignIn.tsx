"use client";
import {
  Grid,
  Paper,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useToast } from "../../providers/toast/useToast";
import { useAppLoading } from "../../providers/loading/useAppLoading";
import { useAuth } from "../../providers/auth/useAuth";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const { success, error, warn } = useToast();
  const { setAppLoading } = useAppLoading();
  const { setLogged } = useAuth();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("username")) {
      warn("Please input username");
      return;
    }
    if (!data.get("password")) {
      warn("Please input password");
      return;
    }
    setAppLoading(true);

    const resLoginApi = await fetch(`login/api`, {
      method: "POST",

      body: JSON.stringify({
        username: data.get("username") as string,
        password: data.get("password") as string,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resLogin = await resLoginApi.json();
    if (resLogin?.data?.username) {
      success(`Login success`);
      setLogged(resLogin?.data?.username);
      setAppLoading(false);
      router.push("/");
    } else {
      error(`Login failed: ${resLogin?.error}`);
      setAppLoading(false);
    }
  };
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="none"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="none"
              id="password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SignIn;
