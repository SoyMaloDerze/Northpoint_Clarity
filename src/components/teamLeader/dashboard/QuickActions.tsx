import {
  CalendarDays,
  ChevronRight,
 ClipboardPen,
  HeartPulse,
  Users,
} from "lucide-react";

import Card from "../../ui/Card";

const actions = [
  {
    title: "New Report",
    description: "Complete participant documentation after each visit.",
    icon: ClipboardPen,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Participants",
    description: "View assigned participants and today's care schedule.",
    icon: Users,
    color: "bg-sky-50 text-sky-600",
  },
  {
    title: "Schedule",
    description: "Review upcoming visits and shift timeline.",
    icon: CalendarDays,
    color: "bg-violet-50 text-violet-600",
  },
  {
    title: "Care Management",
    description: "Review medication, incidents and support tasks.",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600",
  },
];

export default function QuickActions() {
  return (
    <Card className="rounded-4xl border-slate-200 p-7 shadow-sm">
      {/* Header */}

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900">
          Shortcuts
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Jump straight into the tools you use most during your shift.
        </p>
      </div>

      {/* Actions */}

      <div className="grid gap-5 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${action.color}`}
                >
                  <Icon
                    size={26}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:rotate-3"
                  />
                </div>

                <ChevronRight
                  size={18}
                  aria-hidden="true"
                  className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-500"
                />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </Card>
  );
}