"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, MailCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const phonePattern = /^[0-9+()\-\s]{10,20}$/;

const businessTypeOptions = [
  "Not Started Yet",
  "Just Starting",
  "Already Operating",
  "Other",
] as const;

const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(120, "Keep the name under 120 characters."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(160, "Keep the email under 160 characters."),
  phone: z
    .string()
    .trim()
    .min(10, "Enter a valid phone number.")
    .max(20, "Keep the phone number under 20 characters.")
    .regex(phonePattern, "Use numbers and standard phone symbols only."),
  businessType: z.enum(businessTypeOptions),
  message: z
    .string()
    .trim()
    .min(20, "Add a little more detail so we can respond well.")
    .max(1000, "Keep the message under 1000 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

type SubmissionState = "idle" | "submitting" | "success" | "error";

const fieldClassName =
  "h-12 w-full rounded-[1rem] border border-brand-navy/12 bg-white px-4 text-base text-brand-navy outline-none transition-colors duration-200 ease-editorial placeholder:text-brand-navy/34 focus:border-brand-primary focus:ring-2 focus:ring-brand-accent/30";

const textAreaClassName =
  "min-h-[10rem] w-full rounded-[1rem] border border-brand-navy/12 bg-white px-4 py-3 text-base text-brand-navy outline-none transition-colors duration-200 ease-editorial placeholder:text-brand-navy/34 focus:border-brand-primary focus:ring-2 focus:ring-brand-accent/30";

export function ContactFormPanel() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      businessType: "Not Started Yet",
      message: "",
    },
  });

  const messageLength = watch("message")?.length ?? 0;

  async function onSubmit(values: ContactFormValues) {
    try {
      setSubmissionState("submitting");
      setSubmissionMessage("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmissionState("success");
      setSubmissionMessage(
        `Thanks, ${values.fullName.split(" ")[0]}. Your consultation request is on its way — we'll follow up within 24 hours.`,
      );
      reset();
    } catch {
      setSubmissionState("error");
      setSubmissionMessage(
        "We couldn't submit the form right now. Please call or email us directly and we'll help from there.",
      );
    }
  }

  return (
    <div className="rounded-[2.2rem] border border-brand-navy/10 bg-white px-6 py-7 shadow-soft sm:px-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-primary">
            Consultation form
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight tracking-[-0.04em] text-brand-navy">
            Tell us where your business is right now.
          </h2>
        </div>
        <div className="rounded-[1.2rem] border border-brand-navy/10 bg-brand-paper/84 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
            Typical response
          </p>
          <p className="mt-1 text-sm text-brand-navy/68">Within 24 hours</p>
        </div>
      </div>

      <form
        className="mt-8 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-busy={submissionState === "submitting"}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-semibold text-brand-navy">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              maxLength={120}
              className={fieldClassName}
              aria-invalid={errors.fullName ? "true" : "false"}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              {...register("fullName")}
            />
            {errors.fullName ? (
              <p id="fullName-error" className="text-sm text-brand-primary" role="alert">
                {errors.fullName.message}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-brand-navy">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              maxLength={160}
              className={fieldClassName}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email ? (
              <p id="email-error" className="text-sm text-brand-primary" role="alert">
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={20}
              className={fieldClassName}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : "phone-hint"}
              {...register("phone")}
            />
            {errors.phone ? (
              <p id="phone-error" className="text-sm text-brand-primary" role="alert">
                {errors.phone.message}
              </p>
            ) : (
              <p id="phone-hint" className="text-sm text-brand-navy/66">
                Use the number where we can reach you fastest.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="businessType" className="text-sm font-semibold text-brand-navy">
              Business Stage
            </label>
            <select
              id="businessType"
              className={fieldClassName}
              aria-invalid={errors.businessType ? "true" : "false"}
              aria-describedby={errors.businessType ? "businessType-error" : undefined}
              {...register("businessType")}
            >
              {businessTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.businessType ? (
              <p id="businessType-error" className="text-sm text-brand-primary" role="alert">
                {errors.businessType.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="message" className="text-sm font-semibold text-brand-navy">
              Message
            </label>
            <span className="text-xs uppercase tracking-[0.18em] text-brand-navy/66">
              {messageLength}/1000
            </span>
          </div>
          <textarea
            id="message"
            maxLength={1000}
            className={textAreaClassName}
            placeholder="Tell us what you need help with, what stage the business is at, and any timing you are working against."
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            {...register("message")}
          />
          {errors.message ? (
            <p id="message-error" className="text-sm text-brand-primary" role="alert">
              {errors.message.message}
            </p>
          ) : (
              <p id="message-hint" className="text-sm text-brand-navy/66">
              A little context helps us respond with a more useful next step.
            </p>
          )}
        </div>

        <div className="flex flex-col gap-4 border-t border-brand-navy/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[30rem] text-sm leading-7 text-brand-navy/66">
            This form is for consultation requests only. If something is urgent, call the
            office directly and we&apos;ll help route the next step.
          </p>
          <button
            type="submit"
            className={cn(
              buttonVariants({ variant: "primary", size: "lg" }),
              "min-w-[14rem]",
            )}
            disabled={submissionState === "submitting"}
          >
            {submissionState === "submitting" ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Sending request
              </>
            ) : (
              "Submit request"
            )}
          </button>
        </div>

        {submissionMessage ? (
          <div
            className={cn(
              "rounded-[1.2rem] px-4 py-4 text-sm leading-7",
              submissionState === "success"
                ? "bg-brand-paper text-brand-navy"
                : "bg-brand-primary/8 text-brand-primary",
            )}
            role={submissionState === "error" ? "alert" : "status"}
            aria-live={submissionState === "error" ? "assertive" : "polite"}
          >
            <div className="flex gap-3">
              {submissionState === "success" ? (
                <MailCheck className="mt-1 h-4 w-4 shrink-0" />
              ) : null}
              <span>{submissionMessage}</span>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}
