import { motion } from "framer-motion";

import { smoothTransition } from "../../../lib/motion";
import { cn } from "../../../utils/cn";

const filters = [
  "All",
  "Active",
  "Pending",
  "Inactive",
] as const;

export type ParticipantFilter =
  (typeof filters)[number];

type ParticipantFiltersProps = {
  value: ParticipantFilter;
  onChange: (
    value: ParticipantFilter,
  ) => void;
};

export default function ParticipantFilters({
  value,
  onChange,
}: ParticipantFiltersProps) {
  return (
    <section className="overflow-x-auto">
      <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 p-1">
        {filters.map((filter) => {
          const active =
            value === filter;

          return (
            <motion.button
              key={filter}
              type="button"
              whileTap={{
                scale: 0.98,
              }}
              transition={
                smoothTransition
              }
              onClick={() =>
                onChange(filter)
              }
              className={cn(
                "relative rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-200",
                active
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-700",
              )}
            >
              {active && (
                <motion.div
                  layoutId="participant-filter"
                  transition={
                    smoothTransition
                  }
                  className="absolute inset-0 rounded-xl bg-white shadow-sm"
                />
              )}

              <span className="relative z-10">
                {filter}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}