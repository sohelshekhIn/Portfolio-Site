"use client";
import { useEffect, useState } from "react";
import Home from "./Home";

const LoadingParent = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-screen">
          <div className="w-full h-full flex flex-col justify-center gap-4 items-center">
            <h1 className="text-9xl font-semibold text-secondary">0%</h1>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default LoadingParent;
