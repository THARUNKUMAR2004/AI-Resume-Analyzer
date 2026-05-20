import { BarChart3, FileCheck, Search, Shield, Wand2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Keyword intelligence",
    description:
      "Match resumes against job descriptions with semantic and exact keyword analysis.",
  },
  {
    icon: FileCheck,
    title: "ATS parseability",
    description:
      "Detect formatting issues that break Greenhouse, Lever, Workday, and other ATS parsers.",
  },
  {
    icon: BarChart3,
    title: "Impact scoring",
    description:
      "Score bullet points for metrics, ownership language, and outcome-driven phrasing.",
  },
  {
    icon: Wand2,
    title: "AI rewrite suggestions",
    description:
      "Get recruiter-grade rewrites for weak bullets without losing your authentic voice.",
  },
  {
    icon: Shield,
    title: "Bias-aware screening",
    description:
      "Focus on skills and qualifications with structured, consistent evaluation criteria.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-y border-slate-200/80 bg-slate-50/50 py-20 dark:border-white/5 dark:bg-surface-900/30 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="brand" className="mb-4">
            Platform features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Everything recruiters need to shortlist faster
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From single-candidate scans to bulk pipeline reviews, built for modern talent teams.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
