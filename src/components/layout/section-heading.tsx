import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverted = false,
  className,
}: SectionHeadingProps) {
  const alignmentClasses =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left";

  return (
    <div className={cn(alignmentClasses, className)}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.32em]",
            inverted ? "text-brand-mist" : "text-brand-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-balance font-display text-4xl leading-[1.02] tracking-tight sm:text-5xl",
          inverted ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-8 sm:text-lg",
            inverted ? "text-white/78" : "text-brand-navy/68",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

