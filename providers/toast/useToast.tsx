"use client";
import React, { useContext } from "react";

export const ToastContext = React.createContext<any>({});

export const useToast = () => useContext(ToastContext);
