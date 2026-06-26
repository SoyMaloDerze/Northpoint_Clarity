import { participants } from "../mock/participants";

export function getParticipantName(id: string): string {
  return (
    participants.find(
      (participant) => participant.id === id,
    )?.fullName ?? "Unknown Participant"
  );
}