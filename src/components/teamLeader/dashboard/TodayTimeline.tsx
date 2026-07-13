import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
} from "lucide-react";

import Card from "../../ui/Card";

import {
  liveIndicator,
//   smoothTransition,
} from "../../../lib/motion";

const timeline = [
  {
    time: "08:00",
    title: "Morning Briefing",
    subtitle: "Team handover",
    current: false,
  },
  {
    time: "09:30",
    title: "Sarah Johnson",
    subtitle: "Community Visit",
    current: false,
  },
  {
    time: "NOW",
    title: "James Williams",
    subtitle: "Medication Review",
    current: true,
  },
  {
    time: "12:30",
    title: "Lunch Break",
    subtitle: "30 minutes",
    current: false,
  },
  {
    time: "02:00",
    title: "Emily Davis",
    subtitle: "Employment Support",
    current: false,
  },
];

export default function TodayTimeline() {
  return (
    <Card className="rounded-4xl border-slate-200 p-7 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Today's Timeline
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Your upcoming schedule for today.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-800"
        >
          Schedule

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Timeline */}

      <div className="space-y-3">
        {timeline.map((item) => (
          <div
            key={`${item.time}-${item.title}`}
            className={`rounded-3xl border p-5 transition-all duration-200 ${
              item.current
                ? "border-emerald-200 bg-emerald-50"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <div className="flex items-start gap-5">
              {/* Time */}

              <div className="w-16 shrink-0">
                {item.current ? (
                  <div className="flex items-center gap-2">
                    <motion.span
                      animate={liveIndicator}
                      className="h-2.5 w-2.5 rounded-full bg-emerald-600"
                    />

                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      LIVE
                    </span>
                  </div>
                ) : (
                  <span className="text-sm font-semibold text-slate-500">
                    {item.time}
                  </span>
                )}
              </div>

              {/* Content */}

              <div className="flex-1">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.subtitle}
                </p>
              </div>

              {/* Time Icon */}

              <div className="hidden rounded-2xl bg-slate-100 p-2 md:block">
                <Clock3
                  size={18}
                  className={
                    item.current
                      ? "text-emerald-600"
                      : "text-slate-500"
                  }
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}