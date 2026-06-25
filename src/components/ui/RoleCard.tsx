import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  arrowHover,
  buttonTap,
  cardHover,
  cardTap,
  iconHover,
  smoothTransition,
} from "../../lib/motion";

type RoleCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  to: string;
};

export default function RoleCard({
  title,
  description,
  icon: Icon,
  features,
  to,
}: RoleCardProps) {
  const navigate = useNavigate();

  return (
    <motion.button
      type="button"
      title={`Continue as ${title}`}
      whileHover={cardHover}
      whileTap={cardTap}
      transition={smoothTransition}
      onClick={() => navigate(to)}
      className="group flex min-h-128 w-full flex-col rounded-4xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-2xl"
    >
      {/* Header */}

      <div>
        <motion.div
          whileHover={iconHover}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"
        >
          <Icon
            size={30}
            aria-hidden="true"
          />
        </motion.div>

        <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        <p className="mt-5 text-[15px] leading-7 text-slate-600">
          {description}
        </p>
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-200" />

      {/* Features */}

      <div className="flex-1">
        <div className="space-y-5">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                <Check
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />
              </div>

              <span className="text-[15px] font-medium text-slate-700">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div className="mt-10 border-t border-slate-200 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Enter Workspace
          </span>

          <motion.div
            whileHover={arrowHover}
            whileTap={buttonTap}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white"
          >
            <ArrowUpRight
              size={20}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}