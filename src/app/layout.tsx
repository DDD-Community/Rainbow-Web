"use client";

import React from "react";

import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import DefaultContainer from "@/src/components/DefaultContainer";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import ReactQueryProvider from "@/src/queries/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={inter.className}>
          <DefaultContainer>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </DefaultContainer>
          <ToastContainer position="bottom-center" hideProgressBar />
        </body>
      </html>
    </RecoilRoot>
  );
}
