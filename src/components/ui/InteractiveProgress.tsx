import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "../../utils/cn";

type ProgressInsight = {
  label: string;
  value: number | string;
  color: string;
};

type InteractiveProgressProps = {
    title?: string;
    subtitle?: string;
    value: number;
    insights: ProgressInsight[];

    height?: "sm" | "md" | "lg";

    className?: string;
};

const heights = {
  sm: "h-2",
  md: "h-3",
  lg: "h-4",
};

export default function InteractiveProgress({
  value,
  title,
  subtitle,
  insights,
  height = "md",
  className,
}: InteractiveProgressProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen((previous) => !previous)}
    >
      {/* Tooltip */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.96,
            }}
            transition={{
              duration: 0.18,
            }}
            className="absolute bottom-full left-1/2 z-50 mb-4 w-72 -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-slate-900">
                {title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {subtitle}
              </p>
            </div>

            <div className="space-y-3">
              {insights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "h-3 w-3 rounded-full",
                        item.color,
                      )}
                    />

                    <span className="text-sm text-slate-700">
                      {item.label}
                    </span>
                  </div>

                  <span className="font-semibold text-slate-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4 text-xs text-slate-500">
              Updated just now
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress */}

      <div
        className={cn(
          "overflow-hidden rounded-full bg-slate-200",
          heights[height],
        )}
      >
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative h-full overflow-hidden rounded-full bg-emerald-500"
        >
          {/* Shimmer */}

          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 w-1/3 bg-linear-to-r from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  );
}