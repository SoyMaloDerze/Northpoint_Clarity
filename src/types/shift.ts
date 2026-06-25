import type { ID, ISODate } from "./common";

export type ShiftStatus =
  | "completed"
  | "in-progress"
  | "scheduled";

export type Shift = {
  id: ID;

  participantId: ID;

  workerId: ID;

  shiftDate: ISODate;

  startTime: string;

  endTime: string;

  planned: string[];

  delivered: string[];

  changed: string[];

  notes: string;

  status: ShiftStatus;

  createdAt: ISODate;
};