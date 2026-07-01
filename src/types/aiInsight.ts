import type {
  ID,
  ISODate,
} from "./common";

export type AIInsightSeverity =
  | "info"
  | "success"
  | "warning"
  | "critical";

export type AIInsightCategory =
  | "participants"
  | "goals"
  | "reports"
  | "risks"
  | "staff"
  | "compliance"
  | "operations";

export type AIInsight = {
  id: ID;

  title: string;

  summary: string;

  category: AIInsightCategory;

  severity: AIInsightSeverity;

  confidence: number;

  actionable: boolean;

  createdAt: ISODate;
};