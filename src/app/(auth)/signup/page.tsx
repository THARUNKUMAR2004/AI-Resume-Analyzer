import { AuthShell } from "@/components/auth/auth-shell";
import { SignupForm } from "@/components/auth/signup-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create account — ResumeAI",
  description: "Create your ResumeAI account",
};

export default function SignupPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Start analyzing resumes with AI-powered ATS scoring in minutes."
    >
      <SignupForm />
    </AuthShell>
  );
}
