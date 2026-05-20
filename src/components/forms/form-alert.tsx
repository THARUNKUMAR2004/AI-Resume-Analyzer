"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormAlertProps {
  variant: "success" | "error";
  message: string;
  className?: string;
}

export function FormAlert({ variant, message, className }: FormAlertProps) {
  const isSuccess = variant === "success";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "flex items-start gap-3 rounded-xl border p-4 text-sm",
        isSuccess
          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
          : "border-rose-500/20 bg-rose-500/10 text-rose-700 dark:text-rose-400",
        className
      )}
      role="alert"
    >
      {isSuccess ? (
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
      ) : (
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
      )}
      <p>{message}</p>
    </motion.div>
  );
}
