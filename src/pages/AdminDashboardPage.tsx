import DashboardHeader from "../components/dashboard/DashboardHeader";
import GoalProgress from "../components/dashboard/GoalProgress";
import OperationsFeed from "../components/dashboard/OperationsFeed";
import QuickActions from "../components/dashboard/QuickActions";
import RiskOverview from "../components/dashboard/RiskOverview";
import StatCard from "../components/dashboard/StatCard";
import UpcomingReviews from "../components/dashboard/UpcomingReviews";

import {
  goals,
} from "../mock/goals";

import {
  participants,
} from "../mock/participants";

import {
  reports,
} from "../mock/reports";

import {
  risks,
} from "../mock/risks";

import type { DashboardColor } from "../constants/dashboard";

import {
  Activity,
  CircleAlert,
  ClipboardList,
  Users,
  Flag,
  UserPlus,
  type LucideIcon,
} from "lucide-react";

type DashboardAction = {
  title: string;
  description: string;
  icon: LucideIcon;
  color: DashboardColor;
  onClick?: () => void;
};

const quickActions: DashboardAction[] = [
  {
    title: "Add Participant",
    description:
      "Register a new participant into the platform.",
    icon: UserPlus,
    color: "emerald",
    onClick: () => {},
  },
  {
    title: "Create Report",
    description:
      "Record a new outcome or support report.",
    icon: ClipboardList,
    color: "sky",
    onClick: () => {},
  },
  {
    title: "Review Goals",
    description:
      "Monitor participant goals and progress.",
    icon: Flag,
    color: "violet",
    onClick: () => {},
  },
  {
    title: "Manage Risks",
    description:
      "Review participant risks requiring attention.",
    icon: CircleAlert,
    color: "amber",
    onClick: () => {},
  },
];

export default function AdminDashboardPage() {
  const activeRisks = risks.filter(
    (risk) => risk.status !== "resolved",
  ).length;

  return (
    <div className="space-y-8">
      {/* Header */}

      <DashboardHeader
        title="Administrator Dashboard"
        description="Monitor participant outcomes, operational performance and organisation-wide activities from a single workspace."
        actionLabel="Generate Report"
        onAction={() => {}}
      />

      {/* Statistics */}

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Participants"
          value={participants.length}
          subtitle="Registered participants"
          icon={Users}
          color="emerald"
        />

        <StatCard
          title="Reports"
          value={reports.length}
          subtitle="Outcome reports submitted"
          icon={ClipboardList}
          color="sky"
        />

        <StatCard
          title="Goals"
          value={goals.length}
          subtitle="Active participant goals"
          icon={Activity}
          color="violet"
        />

        <StatCard
          title="Active Risks"
          value={activeRisks}
          subtitle="Require monitoring"
          icon={CircleAlert}
          color="amber"
        />
      </section>

      {/* Quick Actions */}

      <QuickActions actions={quickActions} />

      {/* Performance */}

      <section className="grid gap-6 xl:grid-cols-2">
        <GoalProgress />

        <RiskOverview />
      </section>

      {/* Intelligence */}

      <section className="grid gap-6 2xl:grid-cols-[1.2fr_0.8fr]">
        <OperationsFeed />

        <UpcomingReviews />
      </section>
    </div>
  );
}