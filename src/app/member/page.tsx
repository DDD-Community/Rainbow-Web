import React from "react";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

function Member({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default Member;
