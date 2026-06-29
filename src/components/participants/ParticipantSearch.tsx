import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  X,
} from "lucide-react";

import {
  buttonTap,
  inputHover,
  inputFocus,
  smoothTransition,
} from "../../lib/motion";

type ParticipantSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function ParticipantSearch({
  value,
  onChange,
  placeholder = "Search participants...",
}: ParticipantSearchProps) {
  return (
    <motion.div
      whileHover={inputHover}
      whileFocus={inputFocus}
      transition={smoothTransition}
      className="group relative w-full"
    >
      {/* Search Icon */}

      <motion.div
        animate={{
          x: value ? 2 : 0,
          scale: value ? 1.05 : 1,
        }}
        transition={smoothTransition}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600"
      >
        <Search size={18} />
      </motion.div>

      {/* Input */}

      <input
        type="search"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          pl-12
          pr-12
          text-sm
          text-slate-900
          placeholder:text-slate-400
          shadow-sm
          outline-none
          transition-all
          duration-300

          focus:border-emerald-400
          focus:ring-4
          focus:ring-emerald-100

          hover:border-slate-300
        "
      />

      {/* Clear */}

      <AnimatePresence>
        {value && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            transition={smoothTransition}
            whileTap={buttonTap}
            type="button"
            title="Clear search"
            onClick={() => onChange("")}
            className="
              absolute
              right-3
              top-1/2
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              text-slate-400
              transition-colors
              hover:bg-slate-100
              hover:text-slate-700
            "
          >
            <X size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}