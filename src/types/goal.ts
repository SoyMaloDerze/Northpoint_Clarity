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