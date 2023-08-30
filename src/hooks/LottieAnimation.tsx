/* eslint-disable consistent-return */

"use client";

import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { twMerge } from "tailwind-merge";

interface LottieAnimationProps {
  animation: any;
  className?: string;
}

function LottieAnimation({ className, animation }: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim: AnimationItem = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animation // animationData로 변경
      });

      return () => {
        anim.destroy();
      };
    }
  }, [animation]);

  return <div className={twMerge(className)} ref={containerRef} />;
}

export default LottieAnimation;
