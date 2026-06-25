import { cn } from "../../utils/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}