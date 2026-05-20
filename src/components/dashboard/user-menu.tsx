"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  CreditCard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mockUser } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { href: "/dashboard/settings", label: "Profile", icon: User },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
  { href: "/dashboard/settings", label: "Billing", icon: CreditCard },
];

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-2 rounded-xl border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 transition-colors hover:bg-slate-50 dark:border-white/10 dark:bg-surface-900/80 dark:hover:bg-white/5",
          open && "ring-2 ring-brand-500/30"
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-violet-600 text-xs font-semibold text-white">
          {mockUser.initials}
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-sm font-medium text-slate-900 dark:text-white">
            {mockUser.name}
          </span>
          <span className="block text-xs text-slate-500">{mockUser.role}</span>
        </span>
        <ChevronDown
          className={cn(
            "hidden h-4 w-4 text-slate-400 transition-transform sm:block",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 z-50 mt-2 w-56 origin-top-right overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-surface-900"
            role="menu"
          >
            <div className="border-b border-slate-100 px-4 py-3 dark:border-white/5">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {mockUser.name}
              </p>
              <p className="truncate text-xs text-slate-500">{mockUser.email}</p>
            </div>
            <ul className="p-1.5">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                    role="menuitem"
                  >
                    <item.icon className="h-4 w-4 text-slate-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-100 p-1.5 dark:border-white/5">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-rose-600 transition-colors hover:bg-rose-500/10 dark:text-rose-400"
                role="menuitem"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
