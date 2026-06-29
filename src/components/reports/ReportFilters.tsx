import { ChevronDown } from "lucide-react";

type FilterOption = {
  label: string;
  value: string;
};

type ReportFiltersProps = {
  label: string;
  value: string;
  options: FilterOption[];
  onChange: (value: string) => void;
};

export default function ReportFilters({
  label,
  value,
  options,
  onChange,
}: ReportFiltersProps) {
  return (
    <div className="min-w-45">
      <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </label>

      <div className="relative">
        <select
          aria-label="filter"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          className="h-12 w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 pr-11 text-sm font-medium text-slate-900 outline-none transition-all duration-300 hover:border-slate-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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
          aria-hidden="true"
        />
      </div>
    </div>
  );
}