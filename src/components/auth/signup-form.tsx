"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { FormField } from "@/components/forms/form-field";
import { PasswordInput } from "@/components/forms/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { signupSchema, type SignupFormData } from "@/lib/validations/auth";
import { getFieldErrorMessage } from "@/lib/utils";

export function SignupForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const acceptTermsError = getFieldErrorMessage(errors.acceptTerms);

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 1200);
      });
      console.log("Signup:", data);
      await router.push("/dashboard");
    } catch (err) {
      console.error("Signup failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <FormField
          label="Full name"
          htmlFor="fullName"
          error={getFieldErrorMessage(errors.fullName)}
          required
        >
          <Input
            id="fullName"
            placeholder="Jane Smith"
            autoComplete="name"
            hasError={Boolean(errors.fullName)}
            {...register("fullName")}
          />
        </FormField>

        <FormField
          label="Work email"
          htmlFor="email"
          error={getFieldErrorMessage(errors.email)}
          required
        >
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            hasError={Boolean(errors.email)}
            {...register("email")}
          />
        </FormField>

        <FormField
          label="Password"
          htmlFor="password"
          error={getFieldErrorMessage(errors.password)}
          hint="Min. 8 characters, 1 uppercase, 1 number"
          required
        >
          <PasswordInput
            id="password"
            placeholder="••••••••"
            autoComplete="new-password"
            hasError={Boolean(errors.password)}
            {...register("password")}
          />
        </FormField>

        <FormField
          label="Confirm password"
          htmlFor="confirmPassword"
          error={getFieldErrorMessage(errors.confirmPassword)}
          required
        >
          <PasswordInput
            id="confirmPassword"
            placeholder="••••••••"
            autoComplete="new-password"
            hasError={Boolean(errors.confirmPassword)}
            {...register("confirmPassword")}
          />
        </FormField>

        <div className="space-y-1">
          <Controller
            name="acceptTerms"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="acceptTerms"
                hasError={Boolean(errors.acceptTerms)}
                name={field.name}
                ref={field.ref}
                checked={field.value}
                onBlur={field.onBlur}
                onChange={(event) => {
                  field.onChange(event.target.checked);
                }}
                label={
                  <>
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-brand-600 hover:underline dark:text-brand-400"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="text-brand-600 hover:underline dark:text-brand-400"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Privacy Policy
                    </Link>
                  </>
                }
              />
            )}
          />
          {acceptTermsError && (
            <p className="text-sm text-rose-500" role="alert">
              {acceptTermsError}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create account"
          )}
        </Button>

        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-brand-600 hover:text-brand-500 dark:text-brand-400"
          >
            Sign in
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
