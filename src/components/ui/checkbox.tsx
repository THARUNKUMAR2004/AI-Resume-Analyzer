"use client";

import { Check } from "lucide-react";
import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  label?: React.ReactNode;
  hasError?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, hasError, id, name, checked, onChange, onBlur, disabled, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="flex items-start gap-3">
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
          <input
            type="checkbox"
            id={inputId}
            name={name}
            ref={ref}
            checked={Boolean(checked)}
            disabled={disabled}
            onChange={onChange}
            onBlur={onBlur}
            className={cn(
              "peer h-5 w-5 cursor-pointer appearance-none rounded-md border bg-white transition-colors checked:border-brand-600 checked:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 dark:bg-surface-900 dark:focus-visible:ring-offset-surface-950",
              hasError ? "border-rose-500" : "border-slate-300 dark:border-white/20",
              className
            )}
            {...props}
          />
          <Check className="pointer-events-none absolute h-3.5 w-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
        </div>
        {label && (
          <label htmlFor={inputId} className="cursor-pointer text-sm text-slate-600 dark:text-slate-400">
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
