import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group relative overflow-hidden rounded-card border p-6 transition-all duration-300 ease-editorial",
  {
    variants: {
      tone: {
        default:
          "border-brand-navy/10 bg-white shadow-soft hover:-translate-y-1 hover:shadow-lift",
        paper:
          "border-brand-navy/8 bg-brand-paper shadow-soft hover:-translate-y-1 hover:shadow-lift",
        navy:
          "border-white/10 bg-brand-navy text-white shadow-[0_24px_64px_-32px_rgba(0,0,0,0.48)] hover:-translate-y-1 hover:border-white/20",
      },
      padding: {
        default: "p-6 sm:p-7",
        compact: "p-5",
        spacious: "p-7 sm:p-8",
      },
    },
    defaultVariants: {
      tone: "default",
      padding: "default",
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, tone, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ tone, padding }), className)}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export { Card, cardVariants };

