import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Users,
} from "lucide-react";

const today = [
  {
    time: "08:00",
    title: "Morning Briefing",
  },
  {
    time: "09:30",
    title: "Emily Parker",
  },
  {
    time: "11:00",
    title: "Jacob Wilson",
  },
];

const tasks = [
  "6 Participant Visits",
  "3 Outcome Reports",
  "2 Goal Reviews",
];

const recent = [
  "Emily Parker checked in",
  "Outcome report submitted",
  "Goal progress updated",
];

export default function TeamLeaderPreview() {
  return (
    <>
      <div className="rounded-4xl border border-slate-200 bg-white/80 p-7 shadow-xl backdrop-blur">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Today's Workspace
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900">
              Shift Overview
            </h2>
          </div>

          <CalendarDays
            size={24}
            className="text-emerald-600"
          />
        </div>

        <div className="space-y-5">
          {today.map((item) => (
            <div
              key={item.time}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4"
            >
              <Clock3
                size={18}
                className="text-emerald-600"
              />

              <div>
                <p className="font-semibold text-slate-900">
                  {item.title}
                </p>

                <p className="text-sm text-slate-500">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-4xl border border-slate-200 bg-white/80 p-7 shadow-xl backdrop-blur">
        <h3 className="text-lg font-semibold text-slate-900">
          Today's Focus
        </h3>

        <div className="mt-6 space-y-4">
          {tasks.map((task) => (
            <div
              key={task}
              className="flex items-center gap-3"
            >
              <Users
                size={18}
                className="text-emerald-600"
              />

              <span className="text-slate-700">
                {task}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <h4 className="mb-4 font-semibold text-slate-900">
            Recent Activity
          </h4>

          <div className="space-y-3">
            {recent.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-emerald-600"
                />

                <span className="text-sm text-slate-600">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}