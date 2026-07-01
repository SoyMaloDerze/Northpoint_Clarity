import { cn } from "../../utils/cn";

type CardProps = {
  children: React.ReactNode;

  className?: string;

  onClick?: () => void;
};

export default function Card({
  children,
  className,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300",
        onClick && "cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  );
}