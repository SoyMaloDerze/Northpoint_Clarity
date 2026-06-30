import { motion } from "framer-motion";

import {
  smoothTransition,
  springTransition,
} from "../../lib/motion";

type ToggleProps = {
  checked: boolean;

  onChange: (
    checked: boolean,
  ) => void;

  disabled?: boolean;

  label?: string;

  id?: string;

  size?: "sm" | "md";

  className?: string;
};

export default function Toggle({
  checked,
  onChange,
  disabled = false,
  label,
  id,
  size = "md",
  className = "",
}: ToggleProps) {
  const dimensions =
    size === "sm"
      ? {
          track: "h-6 w-10",
          thumb: "h-4 w-4",
          x: 16,
        }
      : {
          track: "h-7 w-12",
          thumb: "h-5 w-5",
          x: 20,
        };

  return (
    <label
      htmlFor={id}
      className={`inline-flex items-center ${
        disabled
          ? "cursor-not-allowed opacity-50"
          : "cursor-pointer"
      } ${className}`}
    >
      {label && (
        <span className="sr-only">
          {label}
        </span>
      )}

      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) =>
          onChange(event.target.checked)
        }
        className="sr-only"
      />

      <motion.div
        layout
        transition={smoothTransition}
        animate={{
          backgroundColor: checked
            ? "#059669"
            : "#CBD5E1",
        }}
        className={`relative flex items-center rounded-full p-1 shadow-inner ${dimensions.track}`}
      >
        <motion.div
          layout
          transition={springTransition}
          animate={{
            x: checked
              ? dimensions.x
              : 0,
          }}
          className={`${dimensions.thumb} rounded-full bg-white shadow-[0_2px_8px_rgba(15,23,42,0.22)]`}
        />
      </motion.div>
    </label>
  );
}