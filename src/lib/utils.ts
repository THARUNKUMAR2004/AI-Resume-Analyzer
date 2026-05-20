import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { FieldError } from "react-hook-form";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatScore(score: number): string {
  return `${Math.round(score)}%`;
}

/** Safely extract a string error message — never returns Event objects or other non-strings. */
export function getFieldErrorMessage(error?: FieldError): string | undefined {
  const message = error?.message;
  if (typeof message === "string" && message.length > 0) {
    return message;
  }
  return undefined;
}
