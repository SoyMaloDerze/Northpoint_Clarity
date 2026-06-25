import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { ROUTES } from "../lib/routes";

export type AuthRole = {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  features: string[];
};

export const AUTH_ROLES: AuthRole[] = [
  {
    title: "Administrator",
    description:
      "Manage participants, analytics, reports, AI insights and organisational operations.",
    icon: ShieldCheck,
    to: ROUTES.ADMIN_LOGIN,
    features: [
      "Analytics Dashboard",
      "Participant Management",
      "Risk Centre",
      "AI Insights",
    ],
  },
  {
    title: "Team Leader",
    description:
      "Coordinate daily support, participant progress, goals and outcome reporting.",
    icon: UsersRound,
    to: ROUTES.TEAM_LEADER_LOGIN,
    features: [
      "Daily Shifts",
      "Participant Goals",
      "Outcome Reports",
      "Care Management",
    ],
  },
];