import { UsersRound } from "lucide-react";

import Badge from "../../ui/Badge";

import { participants } from "../../../mock/participants";

export default function ParticipantsHeader() {
  const activeParticipants = participants.filter(
    (participant) => participant.status === "active",
  ).length;

  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      {/* Left */}

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-600">
            <UsersRound
              size={28}
              aria-hidden="true"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
              Team Caseload
            </p>

            <h1 className="mt-1 text-4xl font-bold tracking-tight text-slate-900">
              Assigned Participants
            </h1>
          </div>
        </div>

        <p className="max-w-2xl text-base leading-7 text-slate-500">
          Review today's participants, monitor their progress, and quickly access
          everything you need before each visit.
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-wrap items-center gap-3">
        <Badge
          variant="success"
          size="lg"
        >
          {activeParticipants} Active
        </Badge>

        <Badge
          variant="neutral"
          size="lg"
        >
          {participants.length} Assigned
        </Badge>
      </div>
    </section>
  );
}