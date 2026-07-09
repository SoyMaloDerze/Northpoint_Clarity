export const ROUTES = {
  HOME: "/",

  ADMIN_LOGIN: "/login/admin",
  TEAM_LEADER_LOGIN: "/login/team-leader",

  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    PARTICIPANTS: "/admin/participants",
    REPORTS: "/admin/reports",
    GOALS: "/admin/goals",
    RISKS: "/admin/risks",
    ANALYTICS: "/admin/analytics",
    SETTINGS: "/admin/settings",
  },

  TEAM_LEADER: {
    DASHBOARD: "/team-leader/dashboard",
    PARTICIPANTS: "/team-leader/participants",
    WORKSPACE: "/team-leader/workspace",
    SCHEDULE: "/team-leader/schedule",
    PROFILE: "/team-leader/profile",
    NOTIFICATIONS: "/team-leader/notifications",
    SETTINGS: "/team-leader/settings",
  },
} as const;