import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Avatar from "../ui/Avatar";

import {
  smoothTransition,
  listItemHover,
} from "../../lib/motion";

import type { Participant } from "../../types/participant";

type ParticipantsTableProps = {
  participants: Participant[];
  onOpenParticipant?: (
    participant: Participant,
  ) => void;
};

export default function ParticipantsTable({
  participants,
  onOpenParticipant,
}: ParticipantsTableProps) {
  return (
    <Card className="hidden overflow-hidden rounded-4xl border-slate-200 md:inline-flex">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Participant
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                NDIS
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Goal
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Joined
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Status
              </th>

              <th className="px-6 py-5 text-right text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {participants.map((participant) => (
              <motion.tr
                key={participant.id}
                whileHover={listItemHover}
                transition={smoothTransition}
                className="border-b border-slate-100 transition-colors duration-300 hover:bg-slate-50"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <Avatar
                      name={participant.fullName}
                      src={participant.avatar ?? undefined}
                      size="md"
                    />

                    <div>
                      <p className="font-semibold text-slate-900">
                        {participant.fullName}
                      </p>

                      <p className="text-sm text-slate-500">
                        {participant.age} years • {participant.gender}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-slate-700">
                  {participant.ndisNumber}
                </td>

                <td className="max-w-sm px-6 py-5">
                  <p className="line-clamp-2 text-sm leading-6 text-slate-700">
                    {participant.primaryGoal}
                  </p>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CalendarDays
                      size={16}
                      className="text-slate-400"
                    />

                    {participant.joinedAt}
                  </div>
                </td>

                <td className="px-6 py-5">
                  <Badge
                    variant={
                      participant.status === "active"
                        ? "success"
                        : "neutral"
                    }
                  >
                    {participant.status}
                  </Badge>
                </td>

                <td className="px-6 py-5 text-right">
                  <Button
                    title="View Profile"
                    size="sm"
                    variant="secondary"
                    rightIcon={
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                      />
                    }
                    onClick={() =>
                      onOpenParticipant?.(participant)
                    }
                  >
                    View
                  </Button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}