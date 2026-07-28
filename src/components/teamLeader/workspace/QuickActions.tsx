import { motion } from "framer-motion";
import {
  AlertTriangle,
  FilePlus2,
  NotebookPen,
  Users,
} from "lucide-react";

import type {
  QuickAction,
} from "../../../types/workspace";

import {
  smoothTransition,
} from "../../../lib/motion";


type QuickActionsProps = {
  actions: QuickAction[];
  onOpen?: (action: QuickAction) => void;
};


const actionIcons = {
  report: FilePlus2,
  visit: Users,
  note: NotebookPen,
  incident: AlertTriangle,
};


const actionStyles = {
  report: {
    icon: "bg-emerald-100 text-emerald-600",
  },

  visit: {
    icon: "bg-blue-100 text-blue-600",
  },

  note: {
    icon: "bg-violet-100 text-violet-600",
  },

  incident: {
    icon: "bg-red-100 text-red-600",
  },
} as const;


export default function QuickActions({
  actions, onOpen,
}: QuickActionsProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Actions
        </p>

        <h2 className="mt-2 text-xl font-bold text-slate-900">
          Quick Actions
        </h2>
      </div>



      {/* Actions */}

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">

        {actions.map((action) => {

          const Icon =
            actionIcons[action.icon];

          const style =
            actionStyles[action.icon];


          return (
            <motion.button
              key={action.id}
              type="button"
              whileHover={{
                y: -2,
              }}
              transition={smoothTransition}
              onClick={() => onOpen?.(action)}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition-colors hover:bg-slate-50"
            >

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.icon}`}
              >
                <Icon
                  size={21}
                  aria-hidden="true"
                />
              </div>



              <div className="min-w-0">

                <h3 className="font-semibold text-slate-900">
                  {action.label}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {action.description}
                </p>

              </div>

            </motion.button>
          );
        })}

      </div>

    </section>
  );
}