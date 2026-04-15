import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold transition-all duration-200 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-brand-primary bg-brand-primary px-6 py-3 text-white shadow-halo hover:-translate-y-0.5 hover:bg-brand-royal active:scale-[0.98]",
        secondary:
          "border-brand-navy/16 bg-white px-6 py-3 text-brand-navy shadow-soft hover:-translate-y-0.5 hover:border-brand-primary/35 hover:text-brand-primary active:scale-[0.98]",
        ghost:
          "border-transparent bg-transparent px-4 py-3 text-brand-navy hover:bg-brand-paper hover:text-brand-primary active:scale-[0.98]",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-4 text-[13px]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };

