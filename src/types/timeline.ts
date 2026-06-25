import type { ID, ISODate } from "./common";

export type TimelineType =
  | "shift"
  | "goal"
  | "report"
  | "risk"
  | "note"
  | "achievement";

export type Timeline = {
  id: ID;

  participantId: ID;

  type: TimelineType;

  title: string;

  description: string;

  createdBy: ID;

  createdAt: ISODate;
};