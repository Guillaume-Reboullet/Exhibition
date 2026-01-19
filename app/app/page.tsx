"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SplashScreen from "./_components/SplashScreen";

export default function Home() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleScrollClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push("/home");
    }, 800); // Wait for slide animation to complete
  };

  return (
    <div className="relative min-h-screen">
      <SplashScreen
        name="Guillaume Reboullet"
        tagline="Minimaliste · Sophistiqué"
        inspiration="Inspiré par Area17 x macOS Tahoe"
        isExiting={isExiting}
        onScrollClick={handleScrollClick}
      />
    </div>
  );
}
