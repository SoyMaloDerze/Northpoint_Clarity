import Spinner from "./Spinner";
import { motion } from "framer-motion";

import { cn } from "../../utils/cn";
import {
  buttonHover,
  buttonTap,
} from "../../lib/motion";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  size?: ButtonSize;

  title?: string;

  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  className?: string;

  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const variants = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700",

  secondary:
    "bg-slate-100 text-slate-900 hover:bg-slate-200",

  outline:
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100",

  danger:
    "bg-red-600 text-white hover:bg-red-700",
};

const sizes = {
  sm: "h-10 px-4 text-sm",

  md: "h-11 px-5 text-sm",

  lg: "h-12 px-6 text-base",
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",

  title,

  fullWidth = false,
  loading = false,
  disabled = false,

  leftIcon,
  rightIcon,

  className,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      title={title}
      whileHover={buttonHover}
      whileTap={buttonTap}
      transition={{
        duration: 0.15,
      }}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
    >
      {loading ? (
        <Spinner
          size="sm"
          className="text-current"
        />
      ) : (
        <>
          {leftIcon}

          <span>{children}</span>

          {rightIcon}
        </>
      )}

    </motion.button>
  );
}