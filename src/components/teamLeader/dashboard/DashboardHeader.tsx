import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const today = new Intl.DateTimeFormat(
    "en-GB",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
    },
  ).format(new Date());

  return (
    <section className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage today's workload, participant care and daily priorities.
        </p>
      </div>

      <div className="inline-flex items-center gap-2 self-start rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
        <CalendarDays
          size={18}
          className="text-emerald-600"
        />

        {today}
      </div>
    </section>
  );
}