import { FileSearch } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Product: ["Features", "ATS Scores", "Pricing", "API"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white py-12 dark:border-white/5 dark:bg-surface-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                <FileSearch className="h-5 w-5" />
              </span>
              Resume<span className="text-brand-600 dark:text-brand-400">AI</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-600 dark:text-slate-400">
              AI-powered resume analysis for candidates and recruiting teams.
              Score, fix, and shortlist with confidence.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">{category}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row dark:border-white/5">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">Built with Next.js · Tailwind CSS · TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
