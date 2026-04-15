import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
};

export function BrandMark({
  className,
  compact = false,
  inverted = false,
}: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-transform duration-500 ease-editorial hover:-translate-y-0.5",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative grid h-10 w-10 place-items-center overflow-hidden transition-transform duration-500 ease-editorial group-hover:rotate-[-6deg]",
          inverted ? "bg-white text-navy" : "bg-navy text-white",
        )}
      >
        <span className="font-display text-[22px] font-semibold leading-none">C</span>
        <span className="absolute bottom-1 right-1 h-1.5 w-1.5 bg-primary" />
      </span>
      {!compact ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[17px] font-semibold tracking-tight",
              inverted ? "text-white" : "text-navy",
            )}
          >
            Canada Business Solutions
          </span>
          <span
            className={cn(
              "mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.24em]",
              inverted ? "text-white/60" : "text-navy/55",
            )}
          >
            Toronto · Start Strong. Scale Smart.
          </span>
        </span>
      ) : null}
    </Link>
  );
}
