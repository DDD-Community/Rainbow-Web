import React from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

function Home({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default Home;
