"use client";
import React, { useState } from "react";
import { ToastContext } from "./useToast";
import styles from "./toast.module.css";
import { Alert, AlertColor, Snackbar } from "@mui/material";
export const ToastProvider = (props: any) => {
  const { children } = props;
  const [state, setState] = useState<{
    isOpen?: boolean;
    message?: { type?: string; text?: string };
    type?: string;
  }>({ isOpen: false });

  const show = (message: object) => {
    setState({ isOpen: true, message: message });
  };

  const hide = () => setState({ isOpen: false });

  const error = (message: string) => {
    show({ type: "error", text: message });
  };

  const warn = (message: string) => {
    show({ type: "warning", text: message });
  };

  const info = (message: string) => {
    show({ type: "info", text: message });
  };

  const success = (message: string) => {
    show({ type: "success", text: message });
  };
  const { isOpen, message } = state;
  return (
    <ToastContext.Provider
      value={{
        error: error,
        warn: warn,
        info: info,
        success: success,
        hide: hide,
      }}
    >
      {children}
      {message && (
        <Snackbar
          open={isOpen}
          autoHideDuration={3000}
          onClose={hide}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className={styles.customWidthToast}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={hide}
            severity={(message?.type as AlertColor) || "info"}
          >
            {message?.text}
          </Alert>
        </Snackbar>
      )}
    </ToastContext.Provider>
  );
};
