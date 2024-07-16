import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-querybuilder/dist/query-builder.css";
import "./globals.css";

import AppProvider from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mixpanel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="favicon.svg" />
      </head>

      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
