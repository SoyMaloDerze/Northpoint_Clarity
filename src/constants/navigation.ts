import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CircleAlert,
  ClipboardList,
  Flag,
  Home,
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
    path: ROUTES.ADMIN_DASHBOARD,
    icon: LayoutDashboard,
  },
  {
    label: "Participants",
    path: ROUTES.PARTICIPANTS,
    icon: Users,
  },
  {
    label: "Reports",
    path: ROUTES.REPORTS,
    icon: ClipboardList,
  },
  {
    label: "Goals",
    path: "/goals",
    icon: Flag,
  },
  {
    label: "Risks",
    path: ROUTES.RISKS,
    icon: CircleAlert,
  },
  {
    label: "Analytics",
    path: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    path: ROUTES.SETTINGS,
    icon: Settings,
  },
];

export const TEAM_LEADER_NAVIGATION: NavigationItem[] = [
  {
    label: "Dashboard",
    path: ROUTES.TEAM_LEADER_DASHBOARD,
    icon: Home,
  },
  {
    label: "Participants",
    path: ROUTES.PARTICIPANTS,
    icon: Users,
  },
  {
    label: "Reports",
    path: ROUTES.REPORTS,
    icon: ClipboardList,
  },
  {
    label: "Goals",
    path: "/goals",
    icon: Flag,
  },
];

export const NAVIGATION = {
  ADMIN: ADMIN_NAVIGATION,
  TEAM_LEADER: TEAM_LEADER_NAVIGATION,
} as const;