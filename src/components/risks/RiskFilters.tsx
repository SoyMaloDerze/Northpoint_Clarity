import { motion } from "framer-motion";
import {
  ChevronDown,
} from "lucide-react";

import {
  smoothTransition,
} from "../../lib/motion";

type Option = {
  label: string;
  value: string;
};

type RiskFiltersProps = {
  label: string;

  value: string;

  options: Option[];

  onChange: (
    value: string,
  ) => void;
};

export default function RiskFilters({
  label,
  value,
  options,
  onChange,
}: RiskFiltersProps) {
  return (
    <div className="min-w-45">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </label>

      <motion.div
        whileHover={{
          y: -1,
        }}
        transition={smoothTransition}
        className="relative"
      >
        <select
          aria-label="filter"
          value={value}
          onChange={(event) =>
            onChange(
              event.target.value,
            )
          }
          className="h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 pr-11 text-sm font-medium text-slate-800 outline-none transition-all duration-300 hover:border-slate-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </motion.div>
    </div>
  );
}