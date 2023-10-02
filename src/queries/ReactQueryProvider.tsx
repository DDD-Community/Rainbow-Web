"use client";

import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "@tanstack/react-query";
import React, { PropsWithChildren, Suspense, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import LoadingScreen from "../components/loading";

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
          suspense: true,
          useErrorBoundary: true
        }
      }
    })
  );

  return (
    <QueryErrorResetBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </QueryErrorResetBoundary>
  );
}
