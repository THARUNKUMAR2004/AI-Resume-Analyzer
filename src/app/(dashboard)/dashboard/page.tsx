import Link from "next/link";
import { ArrowRight, FileUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { demoAnalysis } from "@/components/ats/analysis-data";

export default function DashboardOverviewPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <Card className="bg-gradient-to-br from-brand-600 to-violet-700 text-white">
        <h2 className="text-2xl font-semibold">Welcome to ResumeAI Dashboard</h2>
        <p className="mt-2 text-sm text-white/85">
          Upload a resume, run ATS analysis, and get recruiter-ready improvement suggestions.
        </p>
        <div className="mt-5">
          <Link href="/dashboard/upload">
            <Button variant="secondary">
              <FileUp className="h-4 w-4" />
              Upload resume
            </Button>
          </Link>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Last ATS Score</p>
          <p className="mt-1 text-3xl font-bold">{demoAnalysis.atsScore}/100</p>
        </Card>
        <Card>
          <p className="text-sm text-slate-500 dark:text-slate-400">Last Match Percentage</p>
          <p className="mt-1 text-3xl font-bold">{demoAnalysis.matchPercentage}%</p>
        </Card>
      </div>

      <Card>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">View latest analysis report</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Review strengths, weaknesses, missing keywords, and AI suggestions.
            </p>
          </div>
          <Link href="/dashboard/analyses">
            <Button variant="outline">
              Open report
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
