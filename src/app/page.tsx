"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Loader onComplete={handleLoadingComplete} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}
