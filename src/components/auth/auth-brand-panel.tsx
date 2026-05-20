import { BarChart3, FileSearch, Shield, Users } from "lucide-react";

const stats = [
  { label: "Resumes analyzed", value: "120K+", icon: FileSearch },
  { label: "Avg. ATS improvement", value: "+24%", icon: BarChart3 },
  { label: "Enterprise teams", value: "2,400+", icon: Users },
];

export function AuthBrandPanel() {
  return (
    <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-violet-900 p-10 lg:flex lg:p-12">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-2.5 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
            <FileSearch className="h-5 w-5" />
          </span>
          <span className="text-xl font-semibold">
            Resume<span className="text-brand-200">AI</span>
          </span>
        </div>
        <h2 className="mt-12 text-3xl font-bold leading-tight text-white xl:text-4xl">
          Hire smarter with recruiter-grade resume intelligence
        </h2>
        <p className="mt-4 max-w-md text-brand-100">
          Join talent teams and candidates who use AI-powered ATS scoring to
          shortlist faster and land more interviews.
        </p>
      </div>

      <div className="relative space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
            >
              <stat.icon className="mb-2 h-5 w-5 text-brand-200" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-brand-100">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-brand-100">
          <Shield className="h-4 w-4" />
          SOC 2 ready · GDPR compliant · 256-bit encryption
        </div>
      </div>
    </div>
  );
}
