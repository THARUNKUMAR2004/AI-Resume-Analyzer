"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Lightbulb, SearchX, Target } from "lucide-react";
import { demoAnalysis } from "@/components/ats/analysis-data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScoreRing } from "@/components/ui/score-ring";

function ResultList({
  title,
  items,
  icon,
  variant,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
  variant: "danger" | "success" | "warning" | "brand";
}) {
  return (
    <Card className="h-full p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-slate-500 dark:text-slate-300">{icon}</span>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-slate-200/70 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Badge variant={variant}>{items.length} item(s)</Badge>
      </div>
    </Card>
  );
}

export function AnalysisResultDashboard() {
  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid gap-4 md:grid-cols-2"
      >
        <Card className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">ATS Score</p>
            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
              {demoAnalysis.atsScore}
              <span className="text-base text-slate-500">/100</span>
            </p>
          </div>
          <ScoreRing score={demoAnalysis.atsScore} />
        </Card>

        <Card className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Match Percentage</p>
            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
              {demoAnalysis.matchPercentage}
              <span className="text-base text-slate-500">%</span>
            </p>
          </div>
          <ScoreRing score={demoAnalysis.matchPercentage} />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid gap-4 lg:grid-cols-2"
      >
        <ResultList
          title="Missing Keywords"
          icon={<SearchX className="h-4 w-4 text-rose-500" />}
          items={demoAnalysis.missingKeywords}
          variant="danger"
        />
        <ResultList
          title="Strengths"
          icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
          items={demoAnalysis.strengths}
          variant="success"
        />
        <ResultList
          title="Weaknesses"
          icon={<AlertTriangle className="h-4 w-4 text-amber-500" />}
          items={demoAnalysis.weaknesses}
          variant="warning"
        />
        <ResultList
          title="AI Suggestions"
          icon={<Lightbulb className="h-4 w-4 text-brand-500" />}
          items={demoAnalysis.suggestions}
          variant="brand"
        />
      </motion.div>

      <Card className="flex items-start gap-3 bg-gradient-to-br from-brand-500/10 to-violet-500/10">
        <Target className="mt-0.5 h-5 w-5 text-brand-500" />
        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Recruiter summary
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Strong baseline resume. Add more quantified outcomes and role-specific
            keywords to push ATS score above 90.
          </p>
        </div>
      </Card>
    </div>
  );
}
