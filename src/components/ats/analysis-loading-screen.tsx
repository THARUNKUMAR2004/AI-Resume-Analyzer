"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ScanSearch, Sparkles, Target } from "lucide-react";

const loadingSteps = [
  { label: "Parsing resume structure", icon: ScanSearch },
  { label: "Evaluating ATS compatibility", icon: Target },
  { label: "Scoring strengths and weaknesses", icon: BrainCircuit },
  { label: "Generating recruiter-style suggestions", icon: Sparkles },
];

export function AnalysisLoadingScreen() {
  return (
    <div className="mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-surface-900/80 sm:p-8"
      >
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Running ATS analysis
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          We are scanning your resume and preparing recruiter-level feedback.
        </p>

        <div className="mt-6 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-fuchsia-500"
            initial={{ width: "8%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </div>

        <ul className="mt-8 space-y-3">
          {loadingSteps.map((step, index) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-white/5"
            >
              <step.icon className="h-4 w-4 text-brand-500" />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {step.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
