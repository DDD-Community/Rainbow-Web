"use client";

import React from "react";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import DefaultContainer from "components/defaultContainer";
import ReactQueryProvider from "../queries/ReactQueryProvider";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import "assets/styles/font.css";
import "assets/styles/checkbox.css";
import "assets/styles/toast.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DefaultContainer>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </DefaultContainer>
        <ToastContainer position="bottom-center" hideProgressBar />
      </body>
    </html>
  );
}
