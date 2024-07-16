"use client";

import { PropsWithChildren } from "react";

import QueryClientProvider from "./QueryClientProvider";
import ThemeProvider from "./ThemeProvider";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
