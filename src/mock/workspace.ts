import type {
  TeamLeaderWorkspace,
} from "../types/workspace";


export const TEAM_LEADER_WORKSPACE: TeamLeaderWorkspace = {

  shift: {
    id: "shift-001",

    status: "active",

    startTime: "09:00",

    endTime: "17:00",

    completion: 68,

    completedTasks: 13,

    totalTasks: 19,

    nextActivity:
      "Community visit with Sarah Williams",
  },


  timeline: [

    {
      id: "event-001",

      title: "Morning briefing",

      description:
        "Daily team coordination completed",

      time: "09:00",

      status: "completed",

      type: "goal",
    },


    {
      id: "event-002",

      title: "Sarah Williams visit",

      description:
        "Community participation support",

      time: "10:30",

      status: "completed",

      type: "visit",

      participantId: "participant-001",
    },


    {
      id: "event-003",

      title: "Medication review",

      description:
        "Review medication notes and update records",

      time: "12:00",

      status: "active",

      type: "medication",

      participantId: "participant-002",
    },


    {
      id: "event-004",

      title: "James Carter goal session",

      description:
        "Weekly progress discussion",

      time: "14:30",

      status: "upcoming",

      type: "goal",

      participantId: "participant-003",
    },


    {
      id: "event-005",

      title: "Daily reports",

      description:
        "Complete outstanding documentation",

      time: "16:00",

      status: "attention",

      type: "report",
    },

  ],


  alerts: [

    {
      id: "alert-001",

      title:
        "Sarah's report is incomplete",

      description:
        "Visit notes require completion",

      severity: "high",

      actionLabel:
        "Complete report",

      participantId:
        "participant-001",
    },


    {
      id: "alert-002",

      title:
        "Medication confirmation pending",

      description:
        "Review required before end of shift",

      severity: "medium",

      actionLabel:
        "Review",
    },

  ],


  quickActions: [

    {
      id: "action-001",

      label:
        "New Report",

      description:
        "Create participant documentation",

      icon:
        "report",
    },


    {
      id: "action-002",

      label:
        "Complete Visit",

      description:
        "Update visit progress",

      icon:
        "visit",
    },


    {
      id: "action-003",

      label:
        "Add Note",

      description:
        "Record shift information",

      icon:
        "note",
    },


    {
      id: "action-004",

      label:
        "Incident",

      description:
        "Report an issue",

      icon:
        "incident",
    },

  ],


  participants: [

    {
      id: "participant-001",

      name:
        "Sarah Williams",

      avatar:
        null,

      nextActivity:
        "Community Visit",

      nextTime:
        "10:30",

      status:
        "completed",
    },


    {
      id: "participant-002",

      name:
        "Michael Anderson",

      avatar:
        null,

      nextActivity:
        "Medication Review",

      nextTime:
        "12:00",

      status:
        "active",
    },


    {
      id: "participant-003",

      name:
        "James Carter",

      avatar:
        null,

      nextActivity:
        "Goal Session",

      nextTime:
        "14:30",

      status:
        "upcoming",
    },

  ],


  activities: [

    {
      id: "activity-001",

      message:
        "Report submitted for Sarah Williams",

      time:
        "2026-07-28T10:42:00Z",

      type:
        "report",
    },


    {
      id: "activity-002",

      message:
        "Community visit completed",

      time:
        "2026-07-28T10:20:00Z",

      type:
        "visit",
    },


    {
      id: "activity-003",

      message:
        "Shift started",

      time:
        "2026-07-28T09:00:00Z",

      type:
        "goal",
    },

  ],

};