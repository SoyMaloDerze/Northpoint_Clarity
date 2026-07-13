import {
  Check,
  Circle,
  Clock3,
} from "lucide-react";

import Badge from "../../ui/Badge";
import Card from "../../ui/Card";

const journey = [
  {
    title: "Morning Briefing",
    time: "08:00",
    status: "completed",
  },
  {
    title: "Sarah Johnson",
    time: "08:45",
    status: "completed",
  },
  {
    title: "James Williams",
    time: "10:15",
    status: "current",
  },
  {
    title: "Lunch Break",
    time: "12:30",
    status: "upcoming",
  },
  {
    title: "Emily Davis",
    time: "14:00",
    status: "upcoming",
  },
  {
    title: "Submit Reports",
    time: "16:15",
    status: "upcoming",
  },
];

function Ring({
  radius,
  stroke,
  progress,
  color,
}: {
  radius: number;
  stroke: number;
  progress: number;
  color: string;
}) {
  const circumference = 2 * Math.PI * radius;

  const dashOffset =
    circumference -
    (progress / 100) * circumference;

  return (
    <>
      <circle
        cx="90"
        cy="90"
        r={radius}
        fill="none"
        stroke="#E2E8F0"
        strokeWidth={stroke}
      />

      <circle
        cx="90"
        cy="90"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 90 90)"
      />
    </>
  );
}

export default function TodayProgress() {
  return (
    <Card className="rounded-4xl border-slate-200 p-7 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Today's Progress
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Stay focused on today's shift.
          </p>
        </div>

        <Badge variant="success">
          On Track
        </Badge>
      </div>

      <div className="mt-8 grid gap-10 xl:grid-cols-[360px_1fr]">
        {/* Left */}

        <div>
          <div className="flex justify-center">
            <div className="relative h-52 w-52">
              <svg
                viewBox="0 0 180 180"
                className="h-full w-full"
              >
                <Ring
                  radius={72}
                  stroke={8}
                  progress={68}
                  color="#059669"
                />

                <Ring
                  radius={58}
                  stroke={8}
                  progress={45}
                  color="#F59E0B"
                />

                <Ring
                  radius={44}
                  stroke={8}
                  progress={90}
                  color="#2563EB"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-4xl font-bold tracking-tight text-slate-900">
                  68%
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  Shift Complete
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Visits
              </p>

              <p className="mt-2 text-xl font-semibold text-slate-900">
                6 / 9
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Reports
              </p>

              <p className="mt-2 text-xl font-semibold text-slate-900">
                3 / 5
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Care
              </p>

              <p className="mt-2 text-xl font-semibold text-slate-900">
                4 / 4
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <Clock3
                size={18}
                className="text-emerald-600"
              />

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Estimated Finish
                </p>

                <p className="text-sm text-slate-500">
                  Around 4:30 PM today
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Today's Journey
          </h3>

          <div className="mt-6 space-y-5">
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
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        completed
                          ? "bg-emerald-600 text-white"
                          : current
                            ? "border-2 border-emerald-600 text-emerald-600"
                            : "border border-slate-300 text-slate-400"
                      }`}
                    >
                      {completed ? (
                        <Check size={16} />
                      ) : (
                        <Circle size={14} />
                      )}
                    </div>

                    {index !==
                      journey.length - 1 && (
                      <div className="h-9 w-px bg-slate-200" />
                    )}
                  </div>

                  <div className="flex-1 pb-5">
                    <div className="flex items-center justify-between">
                      <h4
                        className={`font-medium ${
                          current
                            ? "text-slate-900"
                            : "text-slate-600"
                        }`}
                      >
                        {item.title}
                      </h4>

                      <span className="text-sm text-slate-400">
                        {item.time}
                      </span>
                    </div>

                    {current && (
                      <p className="mt-1 text-sm text-emerald-600">
                        Currently in progress
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
}