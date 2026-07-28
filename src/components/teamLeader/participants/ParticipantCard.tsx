import {
  ArrowUpRight,
  CalendarDays,
  Flag,
  UserRound,
} from "lucide-react";

import Avatar from "../../ui/Avatar";
import Badge from "../../ui/Badge";
import Card from "../../ui/Card";

import type { Participant } from "../../../types/participant";

type ParticipantCardProps = {
  participant: Participant;
};

const statusVariant = {
  active: "success",
  pending: "warning",
  inactive: "neutral",
  completed: "info",
} as const;

export default function ParticipantCard({
  participant,
}: ParticipantCardProps) {
  return (
    <Card className="group rounded-4xl border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Avatar
            name={participant.fullName}
            src={participant.avatar ?? undefined}
            size="lg"
          />

          <div>
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">
              {participant.fullName}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {participant.age} years • {participant.gender}
            </p>
          </div>
        </div>

        <Badge
          variant={statusVariant[participant.status]}
        >
          {participant.status}
        </Badge>
      </div>

      {/* Goal */}

      <div className="mt-8 rounded-3xl bg-slate-50 p-5">
        <div className="flex items-center gap-2">
          <Flag
            size={16}
            className="text-emerald-600"
          />

          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Primary Goal
          </span>
        </div>

        <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
          {participant.primaryGoal}
        </p>
      </div>

      {/* Details */}

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <CalendarDays size={16} />

            <span className="text-sm">
              Joined
            </span>
          </div>

          <span className="text-sm font-medium text-slate-900">
            {new Date(
              participant.joinedAt,
            ).toLocaleDateString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-500">
            <UserRound size={16} />

            <span className="text-sm">
              NDIS
            </span>
          </div>

          <span className="font-mono text-sm text-slate-900">
            {participant.ndisNumber}
          </span>
        </div>
      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-5">
        <span className="text-sm font-medium text-slate-500">
          View profile
        </span>

        <ArrowUpRight
          size={18}
          className="text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-emerald-600"
        />
      </div>
    </Card>
  );
}