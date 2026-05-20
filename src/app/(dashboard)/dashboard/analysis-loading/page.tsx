"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnalysisLoadingScreen } from "@/components/ats/analysis-loading-screen";

export default function AnalysisLoadingPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard/analyses");
    }, 4200);

    return () => clearTimeout(timer);
  }, [router]);

  return <AnalysisLoadingScreen />;
}
