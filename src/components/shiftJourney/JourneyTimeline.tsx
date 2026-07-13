import {
  Check,
  Circle,
} from "lucide-react";

const journey = [
  {
    title: "Morning Briefing",
    status: "completed",
  },
  {
    title: "Sarah Johnson",
    status: "completed",
  },
  {
    title: "James Williams",
    status: "current",
  },
  {
    title: "Lunch Break",
    status: "upcoming",
  },
  {
    title: "Emily Davis",
    status: "upcoming",
  },
  {
    title: "Submit Reports",
    status: "upcoming",
  },
];

export default function JourneyTimeline() {
  return (
    <div className="space-y-5">
      {journey.map((item, index) => {
        const completed =
          item.status === "completed";

        const current =
          item.status === "current";

        return (
          <div
            key={item.title}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                  completed
                    ? "bg-emerald-600 text-white"
                    : current
                      ? "border-2 border-emerald-600 text-emerald-600"
                      : "border border-slate-300 text-slate-400"
                }`}
              >
                {completed ? (
                  <Check size={14} />
                ) : (
                  <Circle size={12} />
                )}
              </div>

              {index !== journey.length - 1 && (
                <div className="h-8 w-px bg-slate-200" />
              )}
            </div>

            <div className="pb-4">
              <p
                className={`font-medium ${
                  current
                    ? "text-slate-900"
                    : "text-slate-600"
                }`}
              >
                {item.title}
              </p>

              {current && (
                <p className="mt-1 text-sm text-emerald-600">
                  In Progress
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}