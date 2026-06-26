import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleAlert,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";

import { risks } from "../../mock/risks";

import {
  arrowHover,
  cardHover,
  smoothTransition,
} from "../../lib/motion";

import { cn } from "../../utils/cn";

const highRisks = risks.filter(
  (risk) =>
    risk.level === "high" &&
    risk.status !== "resolved",
);

const mediumRisks = risks.filter(
  (risk) =>
    risk.level === "medium" &&
    risk.status !== "resolved",
);

const lowRisks = risks.filter(
  (risk) =>
    risk.level === "low" &&
    risk.status !== "resolved",
);

const highestPriorityRisk =
  highRisks[0] ??
  mediumRisks[0] ??
  lowRisks[0] ??
  null;

const riskLevels = [
  {
    label: "High",
    value: highRisks.length,
    color: "bg-red-500",
    badge: "danger" as const,
  },
  {
    label: "Medium",
    value: mediumRisks.length,
    color: "bg-amber-500",
    badge: "warning" as const,
  },
  {
    label: "Low",
    value: lowRisks.length,
    color: "bg-emerald-500",
    badge: "success" as const,
  },
];

export default function RiskOverview() {
  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
    >
      <Card className="rounded-4xl border-slate-200 p-7">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Risk Overview
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Monitor participant wellbeing and identify
              priority concerns requiring action.
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
            <CircleAlert
              size={24}
              className="text-red-600"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Summary */}

        <div className="mt-8 space-y-4">
          {riskLevels.map((risk) => (
            <motion.div
              key={risk.label}
              whileHover={{
                x: 4,
              }}
              transition={smoothTransition}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4"
            >
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "h-3 w-3 rounded-full",
                    risk.color,
                  )}
                />

                <span className="font-medium text-slate-700">
                  {risk.label}
                </span>
              </div>

              <Badge variant={risk.badge}>
                {risk.value}
              </Badge>
            </motion.div>
          ))}
        </div>

        {/* Highest Priority */}

        <div className="mt-8 rounded-3xl bg-slate-50 p-5">
          <div className="flex items-center gap-2">
            <TriangleAlert
              size={18}
              className="text-red-600"
            />

            <p className="font-semibold text-slate-900">
              Highest Priority
            </p>
          </div>

          {highestPriorityRisk ? (
            <>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                {highestPriorityRisk.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {highestPriorityRisk.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <Badge variant="danger">
                  {highestPriorityRisk.level.toUpperCase()}
                </Badge>

                <motion.button
                  type="button"
                  whileHover={arrowHover}
                  transition={smoothTransition}
                  className="flex items-center gap-2 text-sm font-semibold text-emerald-600"
                >
                  View Risk

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </motion.button>
              </div>
            </>
          ) : (
            <div className="mt-5 flex items-center gap-3 rounded-2xl bg-emerald-50 p-4">
              <ShieldCheck
                size={20}
                className="text-emerald-600"
              />

              <p className="text-sm font-medium text-emerald-700">
                No active risks require immediate attention.
              </p>
            </div>
          )}
        </div>

        {/* Footer Insight */}

        <div className="mt-8 rounded-2xl bg-red-50 p-4">
          <p className="text-sm leading-7 text-red-700">
            {highRisks.length > 0
              ? `${highRisks.length} high-priority participant risks require review today.`
              : "All participant risks are currently under control with no critical issues detected."}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}