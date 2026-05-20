"use client";

import { motion } from "framer-motion";
import { FileSearch, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNavItems, mockUser } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function DashboardSidebar({ open, onClose }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden={!open}
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200/80 bg-white transition-transform duration-300 dark:border-white/5 dark:bg-surface-950 lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-200/80 px-4 dark:border-white/5">
          <Link href="/dashboard" className="flex items-center gap-2.5 font-semibold" onClick={onClose}>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
              <FileSearch className="h-5 w-5" />
            </span>
            <span>
              Resume<span className="text-brand-600 dark:text-brand-400">AI</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden dark:hover:bg-white/5"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          {dashboardNavItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <motion.div
                key={item.href}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
                  )}
                >
                  <item.icon
                    className={cn(
                      "h-5 w-5",
                      isActive ? "text-brand-600 dark:text-brand-400" : "text-slate-400"
                    )}
                  />
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="border-t border-slate-200/80 p-4 dark:border-white/5">
          <div className="rounded-xl bg-gradient-to-br from-brand-500/10 to-violet-500/10 p-4">
            <p className="text-sm font-medium text-slate-900 dark:text-white">Upgrade to Pro</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Unlimited analyses & team seats
            </p>
            <Link
              href="/dashboard/settings"
              className="mt-3 block rounded-lg bg-brand-600 px-3 py-2 text-center text-xs font-medium text-white hover:bg-brand-500"
            >
              View plans
            </Link>
          </div>

          <div className="mt-4 rounded-xl border border-slate-200/80 bg-white p-3 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-600 text-xs font-semibold text-white">
                {mockUser.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-slate-900 dark:text-white">
                  {mockUser.name}
                </p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {mockUser.role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
