import { motion } from "framer-motion";
import {
  Settings2,
  Sparkles,
} from "lucide-react";

import {
  smoothTransition,
  buttonHover,
  buttonTap,
} from "../../lib/motion";

import Button from "../ui/Button";

type SettingsHeaderProps = {
  onReset?: () => void;
};

export default function SettingsHeader({
  onReset,
}: SettingsHeaderProps) {
  return (
    <section className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      {/* Left */}

      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <Settings2
              size={24}
              aria-hidden="true"
            />
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">
            Settings
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Workspace Settings
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Personalise your workspace, manage security,
          notifications and system preferences for a smoother
          Northpoint Clarity experience.
        </p>
      </div>

      {/* Right */}

      <motion.div
        whileHover={buttonHover}
        whileTap={buttonTap}
        transition={smoothTransition}
        className="w-full sm:w-auto text-nowrap"
      >
        <Button
          title="Restore Defaults"
          variant="secondary"
          fullWidth
          className="sm:w-auto"
          leftIcon={
            <Sparkles
              size={18}
              aria-hidden="true"
            />
          }
          onClick={onReset}
        >
          Restore Defaults
        </Button>
      </motion.div>
    </section>
  );
}