import {
  AlertTriangle,
  Briefcase,
  FileText,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ScoreRing } from "@/components/ui/score-ring";
import { cn } from "@/lib/utils";

export interface ATSScorePreview {
  id: string;
  candidate: string;
  role: string;
  score: number;
  status: "excellent" | "good" | "needs-work";
  highlights: string[];
  missingKeywords: string[];
  updatedAt: string;
}

const previews: ATSScorePreview[] = [
  {
    id: "1",
    candidate: "Alex Chen",
    role: "Staff Software Engineer",
    score: 91,
    status: "excellent",
    highlights: ["Strong technical keywords", "Clear impact metrics", "ATS-friendly layout"],
    missingKeywords: ["Kubernetes"],
    updatedAt: "2 min ago",
  },
  {
    id: "2",
    candidate: "Jordan Lee",
    role: "Product Marketing Manager",
    score: 76,
    status: "good",
    highlights: ["Relevant campaign experience", "Good section structure"],
    missingKeywords: ["SEO", "HubSpot", "A/B testing"],
    updatedAt: "8 min ago",
  },
  {
    id: "3",
    candidate: "Sam Rivera",
    role: "Data Analyst",
    score: 58,
    status: "needs-work",
    highlights: ["Education section complete"],
    missingKeywords: ["SQL", "Tableau", "Python", "ETL"],
    updatedAt: "15 min ago",
  },
];

const statusConfig = {
  excellent: { label: "Excellent", variant: "success" as const, icon: TrendingUp },
  good: { label: "Good fit", variant: "brand" as const, icon: Target },
  "needs-work": { label: "Needs work", variant: "warning" as const, icon: AlertTriangle },
};

export function ATSScoreCards() {
  return (
    <section id="ats-preview" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="brand" className="mb-4">
            Recruiter dashboard
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            ATS score previews at a glance
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Screen candidates faster with unified scoring, keyword gaps, and
            pass-through risk indicators—designed for high-volume hiring teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previews.map((preview) => {
            const config = statusConfig[preview.status];
            const StatusIcon = config.icon;

            return (
              <Card
                key={preview.id}
                className="group relative flex flex-col transition-all hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5 dark:hover:border-brand-500/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-900 dark:text-white">
                          {preview.candidate}
                        </p>
                        <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                          {preview.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  <ScoreRing score={preview.score} size="sm" />
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Badge variant={config.variant} className="gap-1">
                    <StatusIcon className="h-3 w-3" />
                    {config.label}
                  </Badge>
                  <span className="text-xs text-slate-400">{preview.updatedAt}</span>
                </div>

                <div className="mt-5 flex-1 space-y-4">
                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                      <Zap className="h-3.5 w-3.5 text-emerald-500" />
                      Strengths
                    </p>
                    <ul className="space-y-1.5">
                      {preview.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-slate-500">
                      <FileText className="h-3.5 w-3.5 text-amber-500" />
                      Missing keywords
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {preview.missingKeywords.map((kw) => (
                        <span
                          key={kw}
                          className={cn(
                            "rounded-md px-2 py-0.5 text-xs font-medium",
                            preview.status === "needs-work"
                              ? "bg-rose-500/10 text-rose-600 dark:text-rose-400"
                              : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                          )}
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
                >
                  View full report
                </button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
