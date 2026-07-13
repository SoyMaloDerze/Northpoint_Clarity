import { motion } from "framer-motion";
import {
  BrainCircuit,
  CircleCheck,
  Clock3,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import Badge from "../../ui/Badge";
import Card from "../../ui/Card";

import {
  fadeVariants,
  smoothTransition,
} from "../../../lib/motion";

const insights = [
  {
    icon: CircleCheck,
    label: "On Track",
    value: "68% of today's shift completed.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: TriangleAlert,
    label: "Reports",
    value: "3 reports still pending.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Clock3,
    label: "Medication",
    value: "Next review in 20 minutes.",
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
];

export default function AIBrief() {
  return (
    <Card className="rounded-4xl border-slate-200 p-7 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
            <BrainCircuit
              size={24}
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              AI Brief
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Operational summary generated from today's activity.
            </p>
          </div>
        </div>

        <Badge variant="success">
          Live
        </Badge>
      </div>

      {/* Summary */}

      <motion.div
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        transition={smoothTransition}
        className="mt-8 rounded-3xl bg-slate-50 p-6"
      >
        <p className="text-base leading-8 text-slate-700">
          Good morning,
          <span className="font-semibold text-slate-900">
            {" "}Michael.
          </span>

          {" "}You've completed
          <span className="font-semibold text-emerald-700">
            {" "}68%{" "}
          </span>
          of today's shift.

          Sarah Johnson's medication review is due within the next
          <span className="font-semibold text-sky-700">
            {" "}20 minutes.
          </span>

          James Williams has maintained consistent engagement throughout recent visits.

          There are currently
          <span className="font-semibold text-amber-700">
            {" "}3 participant reports{" "}
          </span>
          awaiting completion.

          Based on your current pace, you're likely to finish your shift approximately
          <span className="font-semibold text-emerald-700">
            {" "}25 minutes ahead of schedule.
          </span>
        </p>
      </motion.div>

      {/* Insights */}

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-white p-5"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon
                  size={20}
                  className={item.color}
                  aria-hidden="true"
                />
              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                {item.label}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
        <div className="flex items-center gap-2">
          <Sparkles
            size={18}
            className="text-emerald-600"
            aria-hidden="true"
          />

          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Recommendation
          </p>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-700">
          Complete
          <span className="font-semibold text-slate-900">
            {" "}James Williams'
          </span>
          {" "}participant report before beginning
          <span className="font-semibold text-slate-900">
            {" "}Emily Davis'
          </span>
          {" "}scheduled employment support session to avoid end-of-shift documentation backlog.
        </p>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
        <Sparkles
          size={16}
          className="text-emerald-600"
          aria-hidden="true"
        />

        Updated just now
      </div>
    </Card>
  );
}