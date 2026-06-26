import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Card from "../ui/Card";

import {
  quickActionHover,
  quickActionTap,
  arrowHover,
  iconHover,
  smoothTransition,
} from "../../lib/motion";

import {
  DASHBOARD_COLORS,
  type DashboardColor,
} from "../../constants/dashboard";

type QuickAction = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: DashboardColor;
  onClick?: () => void;
};

type QuickActionsProps = {
  actions: QuickAction[];
};

export default function QuickActions({
  actions,
}: QuickActionsProps) {  
    
  return (
    <Card className="rounded-4xl border-slate-200 p-7">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Frequently used administrator actions for faster
          workflow.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {actions.map((action, index) => {
          const Icon = action.icon;

          const palette = DASHBOARD_COLORS[action.color];

          return (
            <motion.button
              key={action.title}
              type="button"
              onClick={action.onClick}
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                ...smoothTransition,
                delay: index * 0.06,
              }}
              whileHover={quickActionHover}
              whileTap={quickActionTap}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
            >
              {/* Hover Glow */}

              <div className="absolute inset-0 bg-linear-to-br from-emerald-50/0 via-emerald-50/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <motion.div
                    whileHover={iconHover}
                    transition={smoothTransition}
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${palette.background}`}
                  >
                    <Icon
                      size={24}
                      className={palette.icon}
                      aria-hidden="true"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={arrowHover}
                    transition={smoothTransition}
                    className="rounded-xl bg-slate-100 p-2 text-slate-500 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white"
                  >
                    <ArrowUpRight
                      size={18}
                      aria-hidden="true"
                    />
                  </motion.div>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-slate-900">
                  {action.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {action.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </Card>
  );
}