import {
  Activity,
  FileText,
  ShieldAlert,
  Target,
} from "lucide-react";

import MetricCard from "./MetricCard";

type MetricsGridProps = {
  metrics?: Metric[];
};

type Metric = {
  title: string;

  value: number;

  trend: number;

  trendLabel: string;

  icon: React.ElementType;

  suffix?: string;

  prefix?: string;

  decimals?: number;
};

const defaultMetrics: Metric[] = [
  {
    title: "Operational Health",
    value: 92,
    suffix: "%",
    trend: 6.8,
    trendLabel: "vs last month",
    icon: Activity,
  },
  {
    title: "Goal Completion",
    value: 84,
    suffix: "%",
    trend: 12.4,
    trendLabel: "this week",
    icon: Target,
  },
  {
    title: "Reports Submitted",
    value: 98,
    suffix: "%",
    trend: 3.1,
    trendLabel: "on time",
    icon: FileText,
  },
  {
    title: "Risk Exposure",
    value: 14,
    trend: -9.4,
    trendLabel: "active risks",
    icon: ShieldAlert,
  },
];

export default function MetricsGrid({
  metrics = defaultMetrics,
}: MetricsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-4">
      {metrics.map(
        (
          metric,
          index,
        ) => (
          <MetricCard
            key={metric.title}
            {...metric}
            delay={
              index * 150
            }
          />
        ),
      )}
    </section>
  );
}