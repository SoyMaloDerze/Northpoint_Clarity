import {
  ArrowRight,
  Clock3,
} from "lucide-react";



import Card from "../../ui/Card";
import Avatar from "../../ui/Avatar";

import { participants } from "../../../mock/participants";

const activities = [
  "Community Visit",
  "Medication Review",
  "Independent Living",
  "Employment Support",
  "Meal Preparation",
  "Transport Training",
];

const visitTimes = [
  "09:30 AM",
  "10:15 AM",
  "11:45 AM",
  "01:30 PM",
  "03:00 PM",
  "04:15 PM",
];

const statusColors = {
  active: "bg-emerald-500",
  pending: "bg-amber-500",
  inactive: "bg-slate-400",
  completed: "bg-blue-500",
} as const;

export default function ParticipantStrip() {
  const assignedParticipants = participants.slice(0, 6);

  return (
    <Card className="min-w-0 overflow-hidden rounded-4xl border-slate-200 p-7 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Assigned Participants
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Your scheduled participants for today's shift.
          </p>
        </div>

        <button
          type="button"
          className="flex text-nowrap items-center gap-2 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-800"
        >
          See all

          <ArrowRight
            size={16}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Participants */}

      <div className="overflow-x-auto">
        <div className="flex w-max gap-5 pb-2">
            {assignedParticipants.map(
                (participant, index) => (
                    <button
                    key={participant.id}
                    type="button"
                    className="group w-64 shrink-0 snap-start rounded-3xl border border-slate-200 bg-white p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
                    >
                    {/* Avatar */}

                    <Avatar
                        name={participant.fullName}
                        src={
                        participant.avatar ??
                        undefined
                        }
                        size="xl"
                    />

                    {/* Name */}

                    <h3 className="mt-6 line-clamp-1 text-lg font-semibold tracking-tight text-slate-900">
                        {participant.fullName}
                    </h3>

                    {/* Goal */}

                    <p className="mt-1 line-clamp-1 text-sm text-slate-500">
                        {participant.primaryGoal}
                    </p>

                    <div className="my-6 h-px bg-slate-200" />

                    {/* Bottom */}

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-slate-500">
                        <Clock3
                            size={16}
                            aria-hidden="true"
                        />

                        <span className="text-sm font-medium">
                            {
                            visitTimes[
                                index %
                                visitTimes.length
                            ]
                            }
                        </span>
                        </div>

                        <div className="flex items-center gap-2">
                        <span
                            className={`h-2.5 w-2.5 rounded-full ${
                            statusColors[
                                participant.status
                            ] ??
                            "bg-slate-400"
                            }`}
                        />

                        <span className="text-sm font-medium text-slate-700">
                            {participant.status}
                        </span>
                        </div>
                    </div>

                    {/* Hover Reveal */}

                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-5 group-hover:max-h-24 group-hover:opacity-100">
                        <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Today's Activity
                        </p>

                        <p className="mt-2 text-sm font-medium text-slate-700">
                            {
                            activities[
                                index %
                                activities.length
                            ]
                            }
                        </p>
                        </div>
                    </div>
                    </button>
                ),
            )}
        </div>
            
      </div>
    </Card>
  );
}