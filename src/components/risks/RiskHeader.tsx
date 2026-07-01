import { motion } from "framer-motion";
import {
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import Button from "../ui/Button";

import {
  buttonHover,
  buttonTap,
  smoothTransition,
} from "../../lib/motion";

type RiskHeaderProps = {
  onAction?: () => void;
};

export default function RiskHeader({
  onAction,
}: RiskHeaderProps) {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      {/* Left */}

      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
            <ShieldAlert
              size={24}
              aria-hidden="true"
            />
          </div>

          <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-red-700">
            Risk Monitoring
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Risk Center
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Monitor operational risks, identify critical incidents,
          review participant safety concerns and coordinate timely
          intervention across your organisation.
        </p>
      </div>

      {/* Right */}

      <motion.div
        whileHover={buttonHover}
        whileTap={buttonTap}
        transition={smoothTransition}
        className="w-full sm:w-auto"
      >
        <Button
          title="Generate Risk Report"
          fullWidth
          className="sm:w-auto"
          leftIcon={
            <Sparkles
              size={18}
              aria-hidden="true"
            />
          }
          onClick={onAction}
        >
          Generate Risk Report
        </Button>
      </motion.div>
    </section>
  );
}