import { motion } from "framer-motion";
import {
  Activity,
  ShieldAlert,
  ShieldCheck,
  TriangleAlert,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import Card from "../ui/Card";

import {
  cardHover,
  smoothTransition,
} from "../../lib/motion";

type RiskMetric = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ElementType;
  accent:
    | "emerald"
    | "amber"
    | "red"
    | "slate";
};

const metrics: RiskMetric[] = [
  {
    title: "Active Risks",
    value: "8",
    change: "+2 today",
    trend: "up",
    icon: Activity,
    accent: "amber",
  },
  {
    title: "Critical Risks",
    value: "2",
    change: "+1 today",
    trend: "up",
    icon: TriangleAlert,
    accent: "red",
  },
  {
    title: "Resolved Today",
    value: "14",
    change: "+18%",
    trend: "up",
    icon: ShieldCheck,
    accent: "emerald",
  },
  {
    title: "Overall Risk Score",
    value: "Low",
    change: "-12%",
    trend: "down",
    icon: ShieldAlert,
    accent: "slate",
  },
];

export default function RiskStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        const accent = {
          emerald: {
            bg: "bg-emerald-50",
            text: "text-emerald-700",
            chip: "bg-emerald-100 text-emerald-700",
          },
          amber: {
            bg: "bg-amber-50",
            text: "text-amber-700",
            chip: "bg-amber-100 text-amber-700",
          },
          red: {
            bg: "bg-red-50",
            text: "text-red-700",
            chip: "bg-red-100 text-red-700",
          },
          slate: {
            bg: "bg-slate-100",
            text: "text-slate-700",
            chip: "bg-slate-200 text-slate-700",
          },
        }[metric.accent];

        return (
          <motion.div
            key={metric.title}
            whileHover={cardHover}
            transition={smoothTransition}
          >
            <Card className="rounded-4xl border-slate-200 p-6">
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.bg} ${accent.text}`}
                >
                  <Icon size={22} />
                </div>

                <div
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${accent.chip}`}
                >
                  {metric.trend === "up" ? (
                    <TrendingUp size={13} />
                  ) : (
                    <TrendingDown size={13} />
                  )}

                  {metric.change}
                </div>
              </div>

              <p className="mt-7 text-sm font-medium text-slate-500">
                {metric.title}
              </p>

              <h3 className="mt-2 text-4xl font-black tracking-tight text-slate-900">
                {metric.value}
              </h3>
            </Card>
          </motion.div>
        );
      })}
    </section>
  );
}