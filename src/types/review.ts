import type { ID, ISODate } from "./common";

export type ReviewStatus =
  | "scheduled"
  | "due-today"
  | "overdue"
  | "completed";

export type ReviewType =
  | "support-plan"
  | "goal"
  | "medication"
  | "behaviour"
  | "risk";

export type Review = {
  id: ID;

  participantId: ID;

  title: string;

  type: ReviewType;

  scheduledDate: ISODate;

  scheduledTime: string;

  assignedTo: ID;

  status: ReviewStatus;
};