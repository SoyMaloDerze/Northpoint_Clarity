import DashboardHeader from "../../components/teamLeader/dashboard/DashboardHeader";
import GreetingCard from "../../components/teamLeader/dashboard/GreetingCard";
import TodayProgress from "../../components/teamLeader/dashboard/TodayProgress";
import ShiftOverview from "../../components/teamLeader/dashboard/ShiftOverview";
import PriorityAlerts from "../../components/teamLeader/dashboard/PriorityAlerts";
import ParticipantStrip from "../../components/teamLeader/dashboard/ParticipantStrip";
import TodayTimeline from "../../components/teamLeader/dashboard/TodayTimeline";
import QuickActions from "../../components/teamLeader/dashboard/QuickActions";
import AIBrief from "../../components/teamLeader/dashboard/AIBrief";

const TeamLeaderDashboardPage = () => {
  return (
    <div className="mx-auto min-w-0 flex w-full max-w-[1800px] flex-col gap-8">
      {/* Page Header */}

      <DashboardHeader />

      {/* Hero */}

      <GreetingCard />

      {/* Progress + Shift */}

      <section className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <TodayProgress />

        <ShiftOverview />
      </section>

      {/* Alerts + Participants */}

      <section className="grid min-w-0 gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <PriorityAlerts />

        <ParticipantStrip />
      </section>

      {/* Timeline + Shortcuts */}

      <section className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
        <TodayTimeline />

        <QuickActions />
      </section>

      {/* AI Brief */}

      <AIBrief />
    </div>
  );
};

export default TeamLeaderDashboardPage;