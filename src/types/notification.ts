import type { ID, ISODate } from "./common";

export type NotificationType =
  | "report"
  | "risk"
  | "goal"
  | "shift"
  | "system";

export type NotificationPriority =
  | "low"
  | "medium"
  | "high";

export type Notification = {
  id: ID;

  title: string;

  message: string;

  type: NotificationType;

  priority: NotificationPriority;

  recipientId: ID;

  read: boolean;

  createdAt: ISODate;
};