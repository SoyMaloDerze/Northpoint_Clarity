import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CircleAlert,
  ClipboardList,
  Flag,
  LayoutDashboard,
  Settings,
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
    icon: ClipboardList,
  },
  {
    label: "Goals",
    path: "/admin/goals",
    icon: Flag,
  },
  {
    label: "Risks",
    path: ROUTES.ADMIN.RISKS,
    icon: CircleAlert,
  },
  {
    label: "Analytics",
    path: "/admin/analytics",
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
    label: "Reports",
    path: ROUTES.TEAM_LEADER.REPORTS,
    icon: ClipboardList,
  },
  {
    label: "Goals",
    path: "/team-leader/goals",
    icon: Flag,
  },
];

export const NAVIGATION = {
  ADMIN: ADMIN_NAVIGATION,
  TEAM_LEADER: TEAM_LEADER_NAVIGATION,
} as const;