import { forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "../../utils/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;

  label?: string;

  error?: string;

  hint?: string;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;

  isPassword?: boolean;

  showPassword?: boolean;

  onTogglePassword?: () => void;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      isPassword = false,
      showPassword = false,
      onTogglePassword,
      className,
      type,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            type={
              isPassword
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            className={cn(
              "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100",
              leftIcon && "pl-11",
              (rightIcon || isPassword) && "pr-11",
              error &&
                "border-red-500 focus:border-red-500 focus:ring-red-100",
              className,
            )}
            {...props}
          />

          {rightIcon && !isPassword && (
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
              {rightIcon}
            </div>
          )}

          {isPassword && (
            <button
              type="button"
              title={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              onClick={onTogglePassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff
                  size={18}
                  aria-hidden="true"
                />
              ) : (
                <Eye
                  size={18}
                  aria-hidden="true"
                />
              )}
            </button>
          )}
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
  },
);

Input.displayName = "Input";

export default Input;