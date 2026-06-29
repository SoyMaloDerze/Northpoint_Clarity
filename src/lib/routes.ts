export const ROUTES = {
  HOME: "/",

  ADMIN_LOGIN: "/login/admin",
  TEAM_LEADER_LOGIN: "/login/team-leader",

  ADMIN: {
    DASHBOARD: "/admin/dashboard",
    PARTICIPANTS: "/admin/participants",
    REPORTS: "/admin/reports",
    RISKS: "/admin/risks",
    SETTINGS: "/admin/settings",
    SHIFTS: "/admin/shifts",
  },

  TEAM_LEADER: {
    DASHBOARD: "/team-leader/dashboard",
    PARTICIPANTS: "/team-leader/participants",
    REPORTS: "/team-leader/reports",
  },
} as const;