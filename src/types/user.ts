import type { ID } from "./common";

export type UserRole =
  | "administrator"
  | "team-leader";

export type User = {
  id: ID;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  avatar: string | null;
};