import { ArrowRight, CheckCircle2, Sparkles, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScoreRing } from "@/components/ui/score-ring";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px] dark:bg-brand-500/15" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <Badge variant="brand" className="mb-6 gap-1.5 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered ATS analysis
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Hire-ready resumes,{" "}
              <span className="gradient-text">scored like a recruiter</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Upload your resume and get instant ATS compatibility scores, keyword
              gaps, and actionable fixes—built for candidates and talent teams who
              need results, not guesswork.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Keyword match against job descriptions",
                "Formatting & parseability checks",
                "Section strength & impact scoring",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg" className="group">
                <Upload className="h-4 w-4" />
                Upload resume
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button variant="outline" size="lg">
                View sample report
              </Button>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Free scan · PDF & DOCX · No credit card required
            </p>
          </div>

          <div className="relative lg:pl-8">
            <div className="glass relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-surface-900/90 dark:shadow-brand-900/20 sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Live analysis preview
                  </p>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">
                    Senior Product Manager
                  </p>
                </div>
                <ScoreRing score={87} size="lg" />
              </div>

              <div className="space-y-4">
                {[
                  { label: "Keyword match", value: 92, color: "bg-emerald-500" },
                  { label: "Formatting", value: 88, color: "bg-brand-500" },
                  { label: "Impact & metrics", value: 74, color: "bg-amber-500" },
                  { label: "Section completeness", value: 95, color: "bg-emerald-500" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-1.5 flex justify-between text-sm">
                      <span className="text-slate-600 dark:text-slate-300">{metric.label}</span>
                      <span className="font-medium tabular-nums">{metric.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                      <div
                        className={`h-full rounded-full ${metric.color} transition-all duration-700`}
                        style={{ width: `${metric.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/10 p-4">
                <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                  Top recommendation
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Add quantified outcomes to 3 bullet points in your experience section
                  to improve impact score by ~12%.
                </p>
              </div>
            </div>

            <div className="absolute -right-4 -bottom-4 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg dark:border-white/10 dark:bg-surface-800 lg:block">
              <p className="text-xs text-slate-500">Parsed in</p>
              <p className="text-lg font-semibold text-brand-600 dark:text-brand-400">1.2s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
