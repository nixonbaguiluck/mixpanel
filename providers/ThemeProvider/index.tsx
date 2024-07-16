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
    MuiInputBase: {
      styleOverrides: {
        root: {
          textAlign: "center",
          background: "#f6f6f6",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: 8,
          minWidth: "50px",
          input: {
            padding: "4px 8px",
            color: "#000",
          },
          "&:hover": {
            border: "1px solid #4f44e0",
            color: "#4f44e0",
            background: "rgba(0, 0, 0, 0.05)",
          },
          "::before": {
            display: "none",
          },
          "::after": {
            display: "none",
          },
          ".MuiSvgIcon-root": {
            display: "none",
          },
          ".MuiSelect-select": {
            borderRadius: 8,
            padding: "4px 8px !important",
          },
        },
      },
    },
  },
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  return <Provider theme={theme}>{children}</Provider>;
}
