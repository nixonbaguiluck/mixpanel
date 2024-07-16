"use client";

import { PropsWithChildren } from "react";
import { QueryClientProvider } from "react-query";

import queryClient from "@/query";

import ThemeProvider from "./ThemeProvider";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
