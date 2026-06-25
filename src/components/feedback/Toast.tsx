import { CheckCircle } from "lucide-react";

import { cn } from "../../utils/cn";

type ToastVariant =
  | "success"
  | "warning"
  | "error"
  | "info";

type ToastProps = {
  title: string;
  message: string;
  variant?: ToastVariant;
  className?: string;
};

export default function Toast({
  title,
  message,
  className,
}: ToastProps) {
  return (
    <div
      className={cn(
        "flex w-full max-w-sm gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg",
        className
      )}
    >
      <CheckCircle className="text-emerald-600" />

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>

        <p className="mt-1 text-sm text-slate-500">
          {message}
        </p>
      </div>
    </div>
  );
}