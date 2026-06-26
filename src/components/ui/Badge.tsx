import { cn } from "../../utils/cn";

type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "neutral";

type BadgeSize = "sm" | "md" | "lg";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
  className?: string;
};

const variants = {
  primary:
    "border border-emerald-200 bg-emerald-100 text-emerald-700",

  success:
    "border border-green-200 bg-green-100 text-green-700",

  warning:
    "border border-amber-200 bg-amber-100 text-amber-700",

  danger:
    "border border-red-200 bg-red-100 text-red-700",

  info:
    "border border-sky-200 bg-sky-100 text-sky-700",

  neutral:
    "border border-slate-200 bg-slate-100 text-slate-700",
};

const sizes = {
  sm: "h-5 min-w-5 px-1.5 text-[10px]",

  md: "h-6 min-w-6 px-2.5 text-xs",

  lg: "h-8 min-w-8 px-3 text-sm",
};

export default function Badge({
  children,
  variant = "neutral",
  size = "md",
  pill = true,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-semibold leading-none",
        variants[variant],
        sizes[size],
        pill ? "rounded-full" : "rounded-xl",
        className,
      )}
    >
      {children}
    </span>
  );
}