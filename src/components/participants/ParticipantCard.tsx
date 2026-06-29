import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  UserRound,
} from "lucide-react";

import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  cardHover,
  cardTap,
  smoothTransition,
} from "../../lib/motion";

import type { Participant } from "../../types/participant";

type ParticipantCardProps = {
  participant: Participant;
  onOpen?: (participant: Participant) => void;
};

export default function ParticipantCard({
  participant,
  onOpen,
}: ParticipantCardProps) {
  return (
    <motion.div
      whileHover={cardHover}
      whileTap={cardTap}
      transition={smoothTransition}
    >
      <Card className="rounded-4xl border-slate-200 p-6 shadow-sm">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar
              name={participant.fullName}
              src={participant.avatar ?? undefined}
              size="lg"
            />

            <div className="min-w-0">
              <h3 className="truncate text-xl font-bold text-slate-900">
                {participant.fullName}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {participant.age} years • {participant.gender}
              </p>
            </div>
          </div>

          <Badge
            variant={
              participant.status === "active"
                ? "success"
                : "neutral"
            }
          >
            {participant.status}
          </Badge>
        </div>

        {/* Information */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              NDIS Number
            </p>

            <p className="mt-2 font-semibold text-slate-900">
              {participant.ndisNumber}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Joined
            </p>

            <div className="mt-2 flex items-center gap-2 text-slate-900">
              <CalendarDays
                size={16}
                className="text-slate-400"
              />

              <span className="font-semibold">
                {participant.joinedAt}
              </span>
            </div>
          </div>
        </div>

        {/* Primary Goal */}

        <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Primary Goal
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            {participant.primaryGoal}
          </p>
        </div>

        {/* Footer */}

        <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
            <UserRound
              size={16}
              className="text-slate-400"
            />

            Support Worker Assigned
          </div>

          <Button
            title="View Profile"
            variant="secondary"
            rightIcon={
              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            }
            className="text-xs md:text-sm text-nowrap"
            onClick={() => onOpen?.(participant)}
          >
            View Profile
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}