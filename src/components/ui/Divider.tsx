import { cn } from "../../utils/cn";

type DividerProps = {
  label?: string;
  className?: string;
};

export default function Divider({
  label,
  className,
}: DividerProps) {
  if (!label) {
    return (
      <hr
        className={cn(
          "border-slate-200",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-4",
        className
      )}
    >
      <div className="h-px flex-1 bg-slate-200" />

      <span className="text-sm text-slate-500">
        {label}
      </span>

      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}