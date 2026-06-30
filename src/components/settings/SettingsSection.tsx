import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { smoothTransition } from "../../lib/motion";

type SettingsSectionProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function SettingsSection({
  title,
  description,
  children,
}: SettingsSectionProps) {
  return (
    <motion.section
      layout
      transition={smoothTransition}
      className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Header */}

      <div className="border-b border-slate-100 pb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
          {description}
        </p>
      </div>

      {/* Content */}

      <div className="mt-8 space-y-8">
        {children}
      </div>
    </motion.section>
  );
}