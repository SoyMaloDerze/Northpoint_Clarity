import {
  Activity,
  AlertTriangle,
  ShieldCheck,
} from "lucide-react";

type ExecutiveHealthBadgeProps = {
  score: number;
};

export default function ExecutiveHealthBadge({
  score,
}: ExecutiveHealthBadgeProps) {
  const config =
    score >= 90
      ? {
          title: "Excellent",
          description:
            "Organisation operating within healthy thresholds.",
          icon: ShieldCheck,
          classes:
            "border-emerald-200 bg-emerald-50 text-emerald-700",
        }
      : score >= 75
        ? {
            title: "Stable",
            description:
              "Minor operational attention recommended.",
            icon: Activity,
            classes:
              "border-amber-200 bg-amber-50 text-amber-700",
          }
        : {
            title: "Attention Required",
            description:
              "Operational risks require immediate review.",
            icon: AlertTriangle,
            classes:
              "border-red-200 bg-red-50 text-red-700",
          };

  const Icon = config.icon;

  return (
    <div
      className={`rounded-3xl border p-6 ${config.classes}`}
    >
      <div className="flex items-center gap-3">
        <Icon
          size={22}
          aria-hidden="true"
        />

        <span className="text-xs font-semibold uppercase tracking-[0.16em]">
          Operational Health
        </span>
      </div>

      <h3 className="mt-6 text-5xl font-black tracking-tight">
        {score}%
      </h3>

      <p className="mt-3 text-lg font-bold">
        {config.title}
      </p>

      <p className="mt-2 text-sm leading-7 opacity-80">
        {config.description}
      </p>
    </div>
  );
}