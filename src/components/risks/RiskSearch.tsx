import { motion } from "framer-motion";
import {
  Search,
  ShieldAlert,
} from "lucide-react";

import Input from "../ui/Input";

import {
  inputFocus,
  inputHover,
  smoothTransition,
} from "../../lib/motion";

type RiskSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function RiskSearch({
  value,
  onChange,
}: RiskSearchProps) {
  return (
    <motion.div
      whileHover={inputHover}
      whileFocus={inputFocus}
      transition={smoothTransition}
      className="relative"
    >
      <Input
        id="risk-search"
        label="Search Risks"
        placeholder="Search by participant, incident, worker or risk..."
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
        rightIcon={
          <motion.div
            animate={{
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <ShieldAlert
              size={18}
              className="text-red-500"
              aria-hidden="true"
            />
          </motion.div>
        }
      />
    </motion.div>
  );
}