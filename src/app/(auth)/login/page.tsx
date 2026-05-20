import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in — ResumeAI",
  description: "Sign in to your ResumeAI account",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to access your resume analyses and recruiter dashboard."
    >
      <LoginForm />
    </AuthShell>
  );
}
