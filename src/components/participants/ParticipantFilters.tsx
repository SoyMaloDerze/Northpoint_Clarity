import { motion } from "framer-motion";

import {
  smoothTransition,
  buttonTap,
} from "../../lib/motion";
import { cn } from "../../utils/cn";

type FilterOption = {
  label: string;
  value: string;
};

type ParticipantFiltersProps = {
  label: string;

  options: FilterOption[];

  value: string;

  onChange: (value: string) => void;
};

export default function ParticipantFilters({
  label,
  options,
  value,
  onChange,
}: ParticipantFiltersProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>

      <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 p-1">
        {options.map((option) => {
          const active = value === option.value;

          return (
            <motion.button
              key={option.value}
              type="button"
              whileTap={buttonTap}
              transition={smoothTransition}
              onClick={() => onChange(option.value)}
              className={cn(
                "relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-300",

                active
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900",
              )}
            >
              {active && (
                <motion.div
                  layoutId={`filter-${label}`}
                  transition={smoothTransition}
                  className="absolute inset-0 rounded-xl bg-white shadow-sm"
                />
              )}

              <span className="relative z-10">
                {option.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}