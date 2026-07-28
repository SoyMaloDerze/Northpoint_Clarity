import { useState } from "react";

import WorkspaceHeader from "../../components/teamLeader/workspace/WorkspaceHeader";
import ShiftStatusCard from "../../components/teamLeader/workspace/ShiftStatusCard";
import TodayTimeline from "../../components/teamLeader/workspace/TodayTimeline";
import AttentionPanel from "../../components/teamLeader/workspace/AttentionPanel";
import QuickActions from "../../components/teamLeader/workspace/QuickActions";
import TodaysParticipants from "../../components/teamLeader/workspace/TodaysParticipants";
import ShiftActivity from "../../components/teamLeader/workspace/ShiftActivity";
import WorkspaceDrawer from "../../components/teamLeader/workspace/WorkspaceDrawer";

import {
  TEAM_LEADER_WORKSPACE,
} from "../../mock/workspace";


export default function WorkspacePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [drawerTitle, setDrawerTitle] = useState("Workspace Details");

  const openDrawer = (title: string) => {
    setDrawerTitle(title);
    setDrawerOpen(true);
  };

  return (
    <>
      <div className="space-y-6">

        {/* Header */}

        <WorkspaceHeader
          name="Michael"
          date="Wednesday, 28 July"
          shiftTime="09:00 - 17:00"
          isActive
        />



        {/* Shift Hero */}

        <ShiftStatusCard
          shift={
            TEAM_LEADER_WORKSPACE.shift
          }
          onOpen={() =>
            openDrawer("Shift Details")
          }
        />



        {/* Main Workspace Grid */}

        <div className="grid gap-6 lg:grid-cols-3">


          {/* Journey */}

          <div className="lg:col-span-2">

            <TodayTimeline
              events={
                TEAM_LEADER_WORKSPACE.timeline
              }
              onOpen={(event) =>
                openDrawer(event.title)
              }
            />

          </div>



          {/* Actions */}

          <div className="space-y-6">

            <AttentionPanel
              alerts={
                TEAM_LEADER_WORKSPACE.alerts
              }
              onOpen={(alert) =>
                openDrawer(alert.title)
              }
            />


            <QuickActions
              actions={
                TEAM_LEADER_WORKSPACE.quickActions
              }
              onOpen={(action) =>
                openDrawer(action.label)
              }
            />

          </div>


        </div>



        {/* Participants */}

        <TodaysParticipants
          participants={
            TEAM_LEADER_WORKSPACE.participants
          }
          onOpen={(participant) =>
            openDrawer(participant.name)
          }
        />



        {/* Activity */}

        <ShiftActivity
          activities={
            TEAM_LEADER_WORKSPACE.activities
          }
        />


      </div>



      {/* Drawer */}

      <WorkspaceDrawer
        open={drawerOpen}
        title={drawerTitle}
        onClose={() => setDrawerOpen(false)}
      >
        <p className="text-sm leading-6 text-slate-500">
          Workspace actions and details will appear here.
        </p>
      </WorkspaceDrawer>
    </>
  );
}