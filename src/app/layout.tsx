import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme";
import MyHeader from "../../components/Layouts/Header";
import { ToastProvider } from "../../providers/toast/ToastProvider";
import { AuthProvider } from "../../providers/auth/AuthProvider";
import AppLoading from "../../providers/loading/AppLoading";
import { AppLoadingProvider } from "../../providers/loading/AppLoadingProvider";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EbuddyTechnical",
  description: "EbuddyTechnical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppLoading>
              <AppLoadingProvider>
                <AuthProvider>
                  <ToastProvider>
                    <MyHeader />
                    {children}
                  </ToastProvider>
                </AuthProvider>
              </AppLoadingProvider>
            </AppLoading>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
