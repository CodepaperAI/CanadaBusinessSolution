import Image from "next/image";
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
          "relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-md transition-transform duration-500 ease-editorial group-hover:rotate-[-6deg]",
          inverted ? "bg-white" : "bg-transparent",
        )}
      >
        <Image
          src="/brand/logo.png"
          alt="Canada Business Solutions logo"
          width={64}
          height={64}
          priority
          className="h-9 w-9 object-contain"
        />
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
