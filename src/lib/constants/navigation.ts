import {
  BarChart3,
  FileText,
  FolderOpen,
  LayoutDashboard,
  Settings,
  Upload,
  Users,
} from "lucide-react";

export const dashboardNavItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/analyses", label: "Analyses", icon: FileText },
  { href: "/dashboard/upload", label: "Upload", icon: Upload },
  { href: "/dashboard/candidates", label: "Candidates", icon: Users },
  { href: "/dashboard/reports", label: "Reports", icon: BarChart3 },
  { href: "/dashboard/library", label: "Job library", icon: FolderOpen },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
] as const;

export const mockUser = {
  name: "Alex Morgan",
  email: "alex.morgan@company.com",
  role: "Talent Lead",
  initials: "AM",
  avatarUrl: null as string | null,
};
