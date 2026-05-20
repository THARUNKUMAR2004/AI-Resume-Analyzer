import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", hasError, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-xl border bg-white px-4 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-surface-900/80 dark:text-white dark:placeholder:text-slate-500 dark:focus-visible:ring-offset-surface-950",
          hasError
            ? "border-rose-500 focus-visible:ring-rose-500/50"
            : "border-slate-200 focus-visible:ring-brand-500/50 dark:border-white/10",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
