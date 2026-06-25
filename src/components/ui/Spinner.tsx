import { LoaderCircle } from "lucide-react";

import { cn } from "../../utils/cn";

type SpinnerSize = "sm" | "md" | "lg";

type SpinnerProps = {
  size?: SpinnerSize;
  className?: string;
};

const sizes = {
  sm: 18,
  md: 24,
  lg: 36,
};

export default function Spinner({
  size = "md",
  className,
}: SpinnerProps) {
  return (
    <LoaderCircle
      className={cn("animate-spin text-emerald-600", className)}
      size={sizes[size]}
    />
  );
}