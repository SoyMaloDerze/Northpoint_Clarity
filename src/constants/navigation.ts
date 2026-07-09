import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CalendarDays,
  CircleAlert,
  ClipboardCheck,
  Flag,
  LayoutDashboard,
  Settings,
  UserRound,
  Users,
} from "lucide-react";

import { ROUTES } from "../lib/routes";

export type NavigationItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

export const ADMIN_NAVIGATION: NavigationItem[] = [
  {
    label: "Dashboard",
    path: ROUTES.ADMIN.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    label: "Participants",
    path: ROUTES.ADMIN.PARTICIPANTS,
    icon: Users,
  },
  {
    label: "Reports",
    path: ROUTES.ADMIN.REPORTS,
    icon: ClipboardCheck,
  },
  {
    label: "Goals",
    path: ROUTES.ADMIN.GOALS,
    icon: Flag,
  },
  {
    label: "Risks",
    path: ROUTES.ADMIN.RISKS,
    icon: CircleAlert,
  },
  {
    label: "Analytics",
    path: ROUTES.ADMIN.ANALYTICS,
    icon: BarChart3,
  },
  {
    label: "Settings",
    path: ROUTES.ADMIN.SETTINGS,
    icon: Settings,
  },
];

export const TEAM_LEADER_NAVIGATION: NavigationItem[] = [
  {
    label: "Dashboard",
    path: ROUTES.TEAM_LEADER.DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    label: "Participants",
    path: ROUTES.TEAM_LEADER.PARTICIPANTS,
    icon: Users,
  },
  {
    label: "My Day",
    path: ROUTES.TEAM_LEADER.WORKSPACE,
    icon: ClipboardCheck,
  },
  {
    label: "Schedule",
    path: ROUTES.TEAM_LEADER.SCHEDULE,
    icon: CalendarDays,
  },
  {
    label: "Profile",
    path: ROUTES.TEAM_LEADER.PROFILE,
    icon: UserRound,
  },
];

export const NAVIGATION = {
  ADMIN: ADMIN_NAVIGATION,
  TEAM_LEADER: TEAM_LEADER_NAVIGATION,
} as const;