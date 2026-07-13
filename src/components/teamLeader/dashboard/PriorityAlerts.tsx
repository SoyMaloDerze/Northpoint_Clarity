import {
  AlertCircle,
  ChevronRight,
  Clock3,
  FileWarning,
  Pill,
} from "lucide-react";

import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import Card from "../../ui/Card";

const alerts = [
  {
    id: 1,
    title: "Medication Due",
    participant: "Sarah Johnson",
    description: "Medication administration in 15 minutes.",
    priority: "High",
    icon: Pill,
    color: "text-red-600",
    bg: "bg-red-50",
    badge: "danger" as const,
  },
  {
    id: 2,
    title: "Incident Report",
    participant: "James Williams",
    description: "Submit before the end of your shift.",
    priority: "Medium",
    icon: FileWarning,
    color: "text-amber-600",
    bg: "bg-amber-50",
    badge: "warning" as const,
  },
  {
    id: 3,
    title: "Goal Review",
    participant: "Emily Davis",
    description: "Review community participation progress.",
    priority: "Upcoming",
    icon: Clock3,
    color: "text-sky-600",
    bg: "bg-sky-50",
    badge: "info" as const,
  },
];

export default function PriorityAlerts() {
  return (
    <Card className="rounded-4xl border-slate-200 p-7 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Priority Alerts
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Items requiring your attention during this shift.
          </p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          rightIcon={
            <ChevronRight
              size={16}
              aria-hidden="true"
            />
          }
        >
          View All
        </Button>
      </div>

      {/* Alerts */}

      <div className="mt-8 max-h-95 space-y-4 overflow-y-auto pr-1">
        {alerts.map((alert) => {
          const Icon = alert.icon;

          return (
            <div
              key={alert.id}
              className="group rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${alert.bg}`}
                >
                  <Icon
                    size={22}
                    className={alert.color}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-semibold text-slate-900">
                      {alert.title}
                    </h3>

                    <Badge variant={alert.badge}>
                      {alert.priority}
                    </Badge>
                  </div>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {alert.participant}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {alert.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State Placeholder */}

      {alerts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
            <AlertCircle
              size={24}
              className="text-emerald-600"
            />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-slate-900">
            No Active Alerts
          </h3>

          <p className="mt-2 max-w-sm text-sm text-slate-500">
            Great job! Everything looks good for your current shift.
          </p>
        </div>
      )}
    </Card>
  );
}