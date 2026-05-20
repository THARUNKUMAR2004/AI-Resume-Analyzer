"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ResumeUpload } from "@/components/ats/resume-upload";
import { buttonClassName } from "@/components/ui/button";

export default function UploadPage() {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-5xl space-y-4">
      <Link href="/dashboard" className={buttonClassName("ghost", "sm", "w-fit")}>
        <ArrowLeft className="h-4 w-4" />
        Back to dashboard
      </Link>

      <ResumeUpload onContinue={() => router.push("/dashboard/analysis-loading")} />
    </div>
  );
}
