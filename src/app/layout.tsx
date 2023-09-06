"use client";

import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import ReactQueryProvider from "@/src/queries/ReactQueryProvider";
import DefaultContainer from "../components/defaultContainer";
import LoadingScreen from "../components/loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 데이터를 로딩하는 비동기 작업 예시
    setTimeout(() => {
      setIsLoading(false); // 데이터 로딩이 끝나면 isLoading 값을 false로 변경
    }, 2000); // 2초 후에 isLoading을 false로 변경
  }, []);
  return (
    <RecoilRoot>
      <html lang="en">
        <body className={inter.className}>
          <DefaultContainer>
            {isLoading ? <LoadingScreen /> : <ReactQueryProvider>{children}</ReactQueryProvider>}
          </DefaultContainer>
          <ToastContainer position="bottom-center" hideProgressBar />
        </body>
      </html>
    </RecoilRoot>
  );
}
