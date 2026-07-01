import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CircleAlert,
  Info,
  Sparkles,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";

import {
  cardHover,
//   smoothTransition,
} from "../../lib/motion";

import type { AIInsight } from "../../types/aiInsight";

type InsightCardProps = {
  insight: AIInsight;

  delay?: number;
};

export default function InsightCard({
  insight,
  delay = 0,
}: InsightCardProps) {
  const config = getSeverityConfig(
    insight.severity,
  );

  const Icon = config.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.45,
      }}
      whileHover={cardHover}
    >
      <Card className="group relative overflow-hidden rounded-4xl border-slate-200 p-6">

        {/* Ambient Glow */}

        <div
          className={`absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${config.glow}`}
        />

        <div className="relative">

          {/* Header */}

          <div className="flex items-start justify-between gap-5">

            <div className="flex items-center gap-4">

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${config.iconContainer}`}
              >
                <Icon
                  size={22}
                  className={config.iconColor}
                />
              </div>

              <div>

                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                  {insight.title}
                </h3>

                <p className="mt-1 text-sm capitalize text-slate-500">
                  {insight.category}
                </p>

              </div>

            </div>

            <Badge variant={config.badge}>
              {insight.severity}
            </Badge>

          </div>

          {/* Summary */}

          <p className="mt-6 leading-8 text-slate-600">
            {insight.summary}
          </p>

          {/* Footer */}

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-6">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Confidence
              </p>

              <p className="mt-2 text-3xl font-black tracking-tight text-slate-900">
                {insight.confidence}%
              </p>

            </div>

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Generated
              </p>

              <p className="mt-2 font-semibold text-slate-700">
                {insight.createdAt}
              </p>

            </div>

            <div className="flex items-center gap-3">

              {insight.actionable ? (
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">

                  <Sparkles size={16} />

                  Action Recommended

                  <ArrowRight size={15} />

                </div>
              ) : (
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">

                  Monitoring

                </div>
              )}

            </div>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}

function getSeverityConfig(
  severity: AIInsight["severity"],
) {
  switch (severity) {
    case "success":
      return {
        icon: CheckCircle2,
        badge: "success" as const,
        iconContainer:
          "bg-emerald-50",
        iconColor:
          "text-emerald-600",
        glow:
          "bg-emerald-200/40",
      };

    case "warning":
      return {
        icon: CircleAlert,
        badge: "warning" as const,
        iconContainer:
          "bg-amber-50",
        iconColor:
          "text-amber-600",
        glow:
          "bg-amber-200/40",
      };

    case "critical":
      return {
        icon: BrainCircuit,
        badge: "danger" as const,
        iconContainer:
          "bg-red-50",
        iconColor:
          "text-red-600",
        glow:
          "bg-red-200/40",
      };

    default:
      return {
        icon: Info,
        badge: "neutral" as const,
        iconContainer:
          "bg-slate-100",
        iconColor:
          "text-slate-600",
        glow:
          "bg-slate-200/40",
      };
  }
}