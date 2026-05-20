"use client";

import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DashboardPlaceholderProps {
  title: string;
  description: string;
}

export function DashboardPlaceholder({ title, description }: DashboardPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-2xl"
    >
      <Card className="flex flex-col items-center py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-400">
          <Construction className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{title}</h2>
        <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </Card>
    </motion.div>
  );
}
