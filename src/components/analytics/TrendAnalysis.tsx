import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
  TrendingUp,
} from "lucide-react";

import Card from "../ui/Card";

import {
  staggerContainer,
  staggerItem,
} from "../../lib/motion";

type Trend = {
  id: string;

  title: string;

  description: string;

  value: number;

  positive: boolean;

  stable?: boolean;
};

const trends: Trend[] = [
  {
    id: "1",
    title: "Participant Engagement",
    description:
      "Attendance and activity participation continue to improve.",
    value: 12.8,
    positive: true,
  },
  {
    id: "2",
    title: "Goal Completion",
    description:
      "Participants are reaching milestones ahead of schedule.",
    value: 9.4,
    positive: true,
  },
  {
    id: "3",
    title: "Operational Risks",
    description:
      "Critical incidents continue to decline across services.",
    value: -8.6,
    positive: true,
  },
  {
    id: "4",
    title: "Compliance",
    description:
      "Compliance remains consistent across reporting periods.",
    value: 0,
    positive: true,
    stable: true,
  },
];

export default function TrendAnalysis() {
  return (
    <section className="space-y-8">
      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">

          <TrendingUp
            size={24}
            className="text-indigo-600"
          />

        </div>

        <div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Trend Analysis
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-slate-500">
            AI has identified the strongest operational
            movements across the organisation over the
            current reporting period.
          </p>

        </div>

      </div>

      {/* Grid */}

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {trends.map(
          (trend) => {
            const Icon =
              trend.stable
                ? Minus
                : trend.positive
                  ? ArrowUpRight
                  : ArrowDownRight;

            const valueColor =
              trend.stable
                ? "text-slate-600"
                : trend.positive
                  ? "text-emerald-600"
                  : "text-red-600";

            const badgeColor =
              trend.stable
                ? "bg-slate-100 text-slate-700"
                : trend.positive
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-red-50 text-red-700";

            return (
              <motion.div
                key={trend.id}
                variants={staggerItem}
              >
                <Card className="group rounded-4xl border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Trend
                      </p>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                        {trend.title}
                      </h3>

                    </div>

                    <div
                      className={`flex items-center gap-2 rounded-full px-4 py-2 ${badgeColor}`}
                    >
                      <Icon size={16} />

                      <span className="text-sm font-semibold">
                        {trend.stable
                          ? "Stable"
                          : trend.value > 0
                            ? `+${trend.value}%`
                            : `${trend.value}%`}
                      </span>

                    </div>

                  </div>

                  <p className="mt-6 leading-8 text-slate-600">
                    {trend.description}
                  </p>

                  <div className="mt-8 border-t border-slate-200 pt-6">

                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      AI Trend Score
                    </p>

                    <motion.h4
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className={`mt-3 text-5xl font-black tracking-tight ${valueColor}`}
                    >
                      {trend.stable
                        ? "—"
                        : `${Math.abs(
                            trend.value,
                          )}%`}
                    </motion.h4>

                  </div>

                </Card>
              </motion.div>
            );
          },
        )}
      </motion.div>
    </section>
  );
}