import type {
  ID,
  ISODate,
  Status,
} from "./common";

export type Participant = {
  id: ID;

  fullName: string;

  avatar: string | null;

  age: number;

  gender: "Male" | "Female";

  ndisNumber: string;

  primarySupportWorkerId: ID;

  primaryGoal: string;

  status: Status;

  joinedAt: ISODate;
};