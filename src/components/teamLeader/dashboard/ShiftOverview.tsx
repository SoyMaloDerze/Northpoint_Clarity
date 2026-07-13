import {motion} from "framer-motion";
import {
  Activity,
  ClipboardCheck,
  MapPinned,
  Pill,
  Users,
} from "lucide-react";

import Badge from "../../ui/Badge";
import Card from "../../ui/Card";
import {liveIndicator} from "../../../lib/motion";

const metrics = [
  {
    label: "Participants",
    value: "8",
    icon: Users,
  },
  {
    label: "Visits",
    value: "5",
    icon: MapPinned,
  },
  {
    label: "Reports",
    value: "3",
    icon: ClipboardCheck,
  },
  {
    label: "Medication",
    value: "2",
    icon: Pill,
  },
];

export default function ShiftOverview() {
  return (
    <Card className="rounded-4xl border-slate-200 p-7 shadow-sm">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Shift Overview
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Morning Shift • 08:00 AM — 05:00 PM
          </p>
        </div>

        <Badge variant="success">
          Active
        </Badge>
      </div>

      {/* Metrics */}

      <div className="mt-8 grid grid-cols-2 gap-4">
        {metrics.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-200 hover:bg-white"
            >
              <div className="flex items-center gap-2 text-slate-500">
                <Icon
                  size={18}
                  aria-hidden="true"
                />

                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </div>

              <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-slate-200" />

      {/* Current Activity */}

      <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5">
        <div className="flex items-center gap-2">
            <motion.span
                animate={liveIndicator}
                className="h-3 w-3 rounded-full bg-emerald-600"
            />

            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Now
            </span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
            <Activity
              size={22}
              aria-hidden="true"
            />
          </div>

          <div className="flex-1">
            <p className="text-sm text-slate-500">
              Current Activity
            </p>

            <h3 className="mt-1 text-xl font-semibold text-slate-900">
              Visiting James Williams
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Community participation and wellbeing check.
            </p>

            <p className="mt-4 text-sm font-medium text-emerald-700">
              Started at 10:15 AM
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}