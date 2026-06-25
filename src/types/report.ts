import type { ID, ISODate } from "./common";

export type ReportMood =
  | "positive"
  | "neutral"
  | "concerning";

export type ReportOutcome = {
  title: string;
  achieved: boolean;
};

export type Report = {
  id: ID;

  shiftId: ID;

  participantId: ID;

  workerId: ID;

  summary: string;

  outcomes: ReportOutcome[];

  recommendation: string;

  mood: ReportMood;

  aiConfidence: number;

  pdfUrl: string | null;

  submittedAt: ISODate;
};