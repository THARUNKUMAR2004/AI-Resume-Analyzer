import { Badge } from "@/components/ui/badge";

const steps = [
  {
    step: "01",
    title: "Upload resume",
    description: "Drop a PDF or DOCX. We parse structure, sections, and content in seconds.",
  },
  {
    step: "02",
    title: "Add job context",
    description: "Paste a job description or select a saved role template for keyword matching.",
  },
  {
    step: "03",
    title: "Get ATS report",
    description: "Receive scores, gaps, and prioritized fixes ranked by hiring impact.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="brand" className="mb-4">
            How it works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Three steps to a hire-ready resume
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand-500/50 to-transparent md:block"
                  aria-hidden
                />
              )}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-8 dark:border-white/10 dark:bg-surface-900/80">
                <span className="text-4xl font-bold text-brand-500/30 dark:text-brand-400/30">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
