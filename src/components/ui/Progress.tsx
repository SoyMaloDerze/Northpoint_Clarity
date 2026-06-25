import { motion } from "framer-motion";

import { cn } from "../../utils/cn";

type ProgressColor =
  | "primary"
  | "success"
  | "warning"
  | "danger";

type ProgressProps = {
  value: number;
  max?: number;
  color?: ProgressColor;
  showValue?: boolean;
  className?: string;
};

const colors = {
  primary: "bg-emerald-600",
  success: "bg-green-600",
  warning: "bg-amber-500",
  danger: "bg-red-600",
};

export default function Progress({
  value,
  max = 100,
  color = "primary",
  showValue = true,
  className,
}: ProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div className={cn("w-full", className)}>
      {showValue && (
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700">
            Progress
          </span>

          <span className="text-sm font-semibold text-slate-900">
            {Math.round(percentage)}%
          </span>
        </div>
      )}

      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={cn(
            "h-full rounded-full",
            colors[color]
          )}
        />
      </div>
    </div>
  );
}