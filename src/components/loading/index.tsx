import { LoadingSpinner } from "@/public/assets/motions";
import LottieAnimation from "@/src/hooks/LottieAnimation";

function LoadingScreen() {
  return (
    <div className="loading-screen flex justify-center items-center">
      <LottieAnimation animation={LoadingSpinner} />
    </div>
  );
}

export default LoadingScreen;
