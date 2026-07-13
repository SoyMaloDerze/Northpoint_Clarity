import Card from "../ui/Card";
import Badge from "../ui/Badge";

import ShiftRings from "./ShiftRings";
import JourneyTimeline from "./JourneyTimeline";

export default function ShiftJourneyCard() {
  return (
    <Card className="rounded-4xl border-slate-200 p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">
            Shift Journey
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Track today's operational progress.
          </p>
        </div>

        <Badge variant="success">
          On Track
        </Badge>
      </div>

      <div className="mt-8">
        <ShiftRings />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div>
          <p className="text-sm text-slate-500">
            Visits
          </p>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            6 / 9
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Reports
          </p>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            3 / 5
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Medication
          </p>

          <p className="mt-1 text-lg font-semibold text-slate-900">
            4 / 4
          </p>
        </div>
      </div>

      <div className="my-8 h-px bg-slate-200" />

      <JourneyTimeline />
    </Card>
  );
}