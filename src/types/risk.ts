import type { ID, ISODate, RiskLevel } from "./common";

export type RiskStatus =
  | "open"
  | "monitoring"
  | "resolved";

export type Risk = {
  id: ID;

  participantId: ID;

  title: string;

  description: string;

  category:
    | "health"
    | "behaviour"
    | "engagement"
    | "attendance"
    | "medication"
    | "safety";

  level: RiskLevel;

  status: RiskStatus;

  assignedTo: ID;

  identifiedAt: ISODate;

  reviewDate: ISODate;
};