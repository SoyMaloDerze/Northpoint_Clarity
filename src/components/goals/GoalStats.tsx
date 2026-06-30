import {
  CheckCircle2,
  Clock3,
  Flag,
  Target,
} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function GoalStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-4">
      <StatCard
        title="Active Goals"
        subtitle="Currently tracked"
        value="126"
        icon={Flag}
        color="emerald"
        trend="up"
        trendValue="+8%"
      />

      <StatCard
        title="Completed"
        subtitle="Goals achieved"
        value="84"
        icon={CheckCircle2}
        color="sky"
        trend="up"
        trendValue="+15%"
      />

      <StatCard
        title="In Progress"
        subtitle="Ongoing support"
        value="31"
        icon={Clock3}
        color="amber"
        trend="neutral"
        trendValue="0%"
      />

      <StatCard
        title="Success Rate"
        subtitle="Overall completion"
        value="82%"
        icon={Target}
        color="violet"
        trend="up"
        trendValue="+4%"
      />
    </section>
  );
}