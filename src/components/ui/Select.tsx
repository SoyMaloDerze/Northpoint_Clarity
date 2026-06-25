import { ChevronDown } from "lucide-react";
import { forwardRef } from "react";

import { cn } from "../../utils/cn";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  hint?: string;
  error?: string;
  options: Option[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  (
    {
      label,
      hint,
      error,
      options,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            className={cn(
              "h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-11 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100",
              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-100",
              className
            )}
            {...props}
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
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-slate-400"
          />
        </div>

        {hint && !error && (
          <p className="text-xs text-slate-500">
            {hint}
          </p>
        )}

        {error && (
          <p className="text-xs font-medium text-red-600">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;