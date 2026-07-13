import {
  Clock3,
  Sparkles,
} from "lucide-react";

import Card from "../../ui/Card";
import Badge from "../../ui/Badge";

export default function GreetingCard() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
        ? "Good Afternoon"
        : "Good Evening";

  return (
    <Card className="rounded-4xl border-slate-200 p-8 shadow-sm">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Badge variant="success">
            <Sparkles
              size={14}
            />
            Ready for today's shift
          </Badge>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
            {greeting}, Michael 👋
          </h2>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            You're supporting
            <span className="font-semibold text-slate-900">
              {" "}8 participants{" "}
            </span>
            today and your first visit begins in
            <span className="font-semibold text-emerald-700">
              {" "}25 minutes.
            </span>
          </p>
        </div>

        <div className="flex items-center gap-4 rounded-3xl bg-slate-50 px-5 py-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
            <Clock3
              size={22}
              className="text-emerald-700"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Today's Focus
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-900">
              Community Visits · Reports · Medication
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}