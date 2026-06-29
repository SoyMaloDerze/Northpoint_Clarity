import {
  CheckCircle2,
  Clock3,
  FileText,
  TriangleAlert,
} from "lucide-react";

import StatCard from "../dashboard/StatCard";

export default function ReportStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-4">
      <StatCard
        title="Total Reports"
        subtitle="All reports"
        value="248"
        icon={FileText}
        color="emerald"
        trend="up"
        trendValue="+12%"
      />

      <StatCard
        title="Pending Review"
        subtitle="Awaiting approval"
        value="18"
        icon={Clock3}
        color="amber"
        trend="down"
        trendValue="-4%"
      />

      <StatCard
        title="Approved"
        subtitle="Completed"
        value="219"
        icon={CheckCircle2}
        color="sky"
        trend="up"
        trendValue="+9%"
      />

      <StatCard
        title="Overdue"
        subtitle="Requires attention"
        value="11"
        icon={TriangleAlert}
        color="red"
        trend="down"
        trendValue="-2%"
      />
    </section>
  );
}