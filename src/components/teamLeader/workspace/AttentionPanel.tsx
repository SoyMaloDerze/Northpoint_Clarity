import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import Badge from "../../ui/Badge";

import type {
  WorkspaceAlert,
} from "../../../types/workspace";

import {
  staggerItem,
  smoothTransition,
} from "../../../lib/motion";


type AttentionPanelProps = {
  alerts: WorkspaceAlert[];
  onOpen?: (alert: WorkspaceAlert) => void;
};


const severityMap = {
  low: {
    label: "Low",
    variant: "info" as const,
  },

  medium: {
    label: "Medium",
    variant: "warning" as const,
  },

  high: {
    label: "High",
    variant: "danger" as const,
  },
};


export default function AttentionPanel({
  alerts, onOpen,
}: AttentionPanelProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-start justify-between gap-3">

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            Attention
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            Needs Action
          </h2>
        </div>


        {alerts.length === 0 && (
          <CheckCircle2
            size={24}
            className="text-emerald-500"
          />
        )}

      </div>



      {/* Empty state */}

      {alerts.length === 0 ? (

        <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
          Everything is up to date.
        </div>

      ) : (

        <div className="mt-6 space-y-4">

          {alerts.map((alert) => {

            const severity =
              severityMap[alert.severity];

            return (
              <motion.button
                key={alert.id}
                variants={staggerItem}
                initial="initial"
                animate="animate"
                whileHover={{
                  x: 3,
                }}
                transition={smoothTransition}
                type="button"
                onClick={() => onOpen?.(alert)}
                className="group flex w-full items-start gap-4 rounded-2xl border border-slate-200 p-4 text-left transition-colors hover:bg-slate-50"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">

                  <AlertCircle
                    size={20}
                  />

                </div>



                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h3 className="font-semibold text-slate-900">
                      {alert.title}
                    </h3>


                    <Badge
                      size="sm"
                      variant={severity.variant}
                    >
                      {severity.label}
                    </Badge>

                  </div>


                  <p className="mt-1 text-sm leading-5 text-slate-500">
                    {alert.description}
                  </p>


                  {alert.actionLabel && (

                    <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-emerald-700">

                      {alert.actionLabel}

                      <ArrowRight
                        size={15}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />

                    </div>

                  )}

                </div>

              </motion.button>
            );
          })}

        </div>

      )}

    </section>
  );
}