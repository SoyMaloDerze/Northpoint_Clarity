import {
  Activity,
  BrainCircuit,
  CircleAlert,
  Users,
} from "lucide-react";

import { goals } from "../../mock/goals";
import { notifications } from "../../mock/notifications";
import { participants } from "../../mock/participants";
import { reports } from "../../mock/reports";
import { risks } from "../../mock/risks";

const previewStats = [
  {
    label: "Participants",
    value: participants.length,
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Goals",
    value: goals.length,
    icon: Activity,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    label: "Reports",
    value: reports.length,
    icon: BrainCircuit,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    label: "Risks",
    value: risks.filter(
      (risk) => risk.status !== "resolved",
    ).length,
    icon: CircleAlert,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

const activityFeed = notifications.slice(0, 5);

export default function AdminPreview() {
  return (
    <>
      <div className="rounded-4xl border border-slate-200 bg-white/80 p-7 shadow-xl backdrop-blur">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Live System Preview
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Operations Overview
            </h2>
          </div>

          <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,.6)]" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {previewStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 p-5"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
                >
                  <Icon
                    size={22}
                    className={item.color}
                  />
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-4xl border border-slate-200 bg-white/80 p-7 shadow-xl backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            Live Activity
          </h3>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            LIVE
          </span>
        </div>

        <div className="space-y-4">
          {activityFeed.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"
            >
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <div>
                <p className="font-semibold text-slate-900">
                  {item.title}
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {item.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}