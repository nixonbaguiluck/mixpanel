"use client";

import { createTheme, ThemeProvider as Provider } from "@mui/material/styles";
import { PropsWithChildren } from "react";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          background: "#f6f6f6",
          border: "1px solid #f6f6f6",
          color: "#000",
          boxShadow: "none",
          "&:hover": {
            border: "1px solid #4f44e0",
            color: "#4f44e0",
            background: "#f6f6f6",
          },
        },
      },
    },
  },
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <Provider theme={theme}>{children}</Provider>;
}
