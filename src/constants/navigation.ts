import {LayoutDashboard,} from "lucide-react";

export const NAVIGATION = {
  ADMIN: [],

  TEAM_LEADER: [],
} as const;


export const ADMIN_NAVIGATION = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
];