import type {
  ID,
  ISODate,
} from "./common";


export type ShiftStatus =
  | "scheduled"
  | "active"
  | "completed"
  | "paused";


export type TimelineStatus =
  | "completed"
  | "active"
  | "upcoming"
  | "attention";


export type ActivityType =
  | "visit"
  | "report"
  | "note"
  | "medication"
  | "goal";


export type WorkspaceShift = {
  id: ID;

  status: ShiftStatus;

  startTime: string;

  endTime: string;

  completion: number;

  completedTasks: number;

  totalTasks: number;

  nextActivity: string | null;
};


export type TimelineEvent = {
  id: ID;

  title: string;

  description: string;

  time: string;

  status: TimelineStatus;

  type: ActivityType;

  participantId?: ID;
};


export type WorkspaceAlert = {
  id: ID;

  title: string;

  description: string;

  severity:
    | "low"
    | "medium"
    | "high";

  actionLabel?: string;

  participantId?: ID;
};


export type QuickAction = {
  id: ID;

  label: string;

  description: string;

  icon:
    | "report"
    | "visit"
    | "note"
    | "incident";
};


export type TodayParticipant = {
  id: ID;

  name: string;

  avatar: string | null;

  nextActivity: string;

  nextTime: string;

  status:
    | "completed"
    | "upcoming"
    | "active"
    | "attention";
};


export type ActivityEvent = {
  id: ID;

  message: string;

  time: ISODate;

  type: ActivityType;
};


export type TeamLeaderWorkspace = {
  shift: WorkspaceShift;

  timeline: TimelineEvent[];

  alerts: WorkspaceAlert[];

  quickActions: QuickAction[];

  participants: TodayParticipant[];

  activities: ActivityEvent[];
};