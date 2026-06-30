import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

import Input from "../ui/Input";

import {
  inputFocus,
  inputHover,
  smoothTransition,
} from "../../lib/motion";

type GoalSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function GoalSearch({
  value,
  onChange,
}: GoalSearchProps) {
  return (
    <motion.div
      whileHover={inputHover}
      whileFocus={inputFocus}
      transition={smoothTransition}
      className="relative"
    >
      <Input
        id="goal-search"
        label="Search Goals"
        placeholder="Search by goal title or description..."
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        leftIcon={
          <Search
            size={18}
            aria-hidden="true"
          />
        }
      />

      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange("")}
          className="absolute right-4 top-13 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all duration-300 hover:bg-slate-100 hover:text-slate-700"
        >
          <X
            size={16}
            aria-hidden="true"
          />
        </button>
      )}
    </motion.div>
  );
}