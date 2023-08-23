"use client";

import React from "react";

import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import ReactQueryProvider from "@/src/queries/ReactQueryProvider";
import DefaultContainer from "../components/defaultContainer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col justify-center items-center w-[375px] border-[5px] border-black">
            <DefaultContainer>
              <ReactQueryProvider>{children}</ReactQueryProvider>
            </DefaultContainer>
            <ToastContainer position="bottom-center" hideProgressBar />
          </div>
        </body>
      </html>
    </RecoilRoot>
  );
}
