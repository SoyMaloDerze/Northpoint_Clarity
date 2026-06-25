import { forwardRef } from "react";

import { cn } from "../../utils/cn";

type TextareaProps = {
  label?: string;
  hint?: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(
  (
    {
      label,
      hint,
      error,
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

        <textarea
          ref={ref}
          className={cn(
            "min-h-32 resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-100",
            className
          )}
          {...props}
        />

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

Textarea.displayName = "Textarea";

export default Textarea;