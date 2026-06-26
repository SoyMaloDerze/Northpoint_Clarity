import type { ID, ISODate } from "./common";

export type GoalStatus =
  | "not-started"
  | "in-progress"
  | "completed";

export type GoalCategory =
  | "community"
  | "health"
  | "living"
  | "communication"
  | "transport"
  | "wellbeing";

export const GOAL_STATUS = {
  NOT_STARTED: "not-started",
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed",
} as const;

export type Goal = {
  id: ID;

  participantId: ID;

  title: string;

  category: GoalCategory;

  description: string;

  progress: number;

  status: GoalStatus;

  targetDate: ISODate;

  updatedAt: ISODate;
};