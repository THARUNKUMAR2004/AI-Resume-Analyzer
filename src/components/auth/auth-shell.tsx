"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileSearch } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AuthBrandPanel } from "./auth-brand-panel";

interface AuthShellProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthShell({ children, title, subtitle }: AuthShellProps) {
  return (
    <div className="flex min-h-screen">
      <AuthBrandPanel />

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-200/80 px-4 py-4 dark:border-white/5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-semibold lg:hidden">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
              <FileSearch className="h-5 w-5" />
            </span>
            Resume<span className="text-brand-600 dark:text-brand-400">AI</span>
          </Link>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>

        <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-md"
          >
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                {title}
              </h1>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{subtitle}</p>
            </div>
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
