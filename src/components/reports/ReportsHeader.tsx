import { FileText, Plus } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../ui/Button";

import {
  buttonHover,
  buttonTap,
  smoothTransition,
} from "../../lib/motion";

type ReportsHeaderProps = {
  onAction?: () => void;
};

export default function ReportsHeader({
  onAction,
}: ReportsHeaderProps) {
  return (
    <section className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      {/* Left */}

      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <FileText
              size={22}
              aria-hidden="true"
            />
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
            Reports
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Reports
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Review participant reports, monitor submission
          progress, and keep service documentation organised
          across your team.
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
          title="Create Report"
          size="lg"
          fullWidth
          className="sm:w-auto text-nowrap"
          leftIcon={
            <Plus
              size={18}
              aria-hidden="true"
            />
          }
          onClick={onAction}
        >
          Create Report
        </Button>
      </motion.div>
    </section>
  );
}