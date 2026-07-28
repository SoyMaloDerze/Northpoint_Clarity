import { motion } from "framer-motion";
import {
  Clock3,
  ChevronRight,
} from "lucide-react";

import Avatar from "../../ui/Avatar";
import Badge from "../../ui/Badge";

import type {
  TodayParticipant,
} from "../../../types/workspace";

import {
  smoothTransition,
} from "../../../lib/motion";


type ParticipantQuickCardProps = {
  participant: TodayParticipant;
  onOpen?: (participant: TodayParticipant) => void;

};


const statusConfig = {
  completed: {
    label: "Completed",
    variant: "success" as const,
  },

  active: {
    label: "Active",
    variant: "primary" as const,
  },

  upcoming: {
    label: "Upcoming",
    variant: "neutral" as const,
  },

  attention: {
    label: "Attention",
    variant: "warning" as const,
  },
};


export default function ParticipantQuickCard({
  participant, onOpen
}: ParticipantQuickCardProps) {
  const status =
    statusConfig[participant.status];

  return (
    <motion.button
      type="button"
      whileHover={{
        y: -3,
      }}
      transition={smoothTransition}
      onClick={() => onOpen?.(participant)}
      className="group flex min-w-70 flex-col rounded-3xl border border-slate-200 bg-white p-5 text-left transition-colors hover:bg-slate-50"
    >

      {/* Top */}

      <div className="flex items-center justify-between gap-3">

        <div className="flex items-center gap-3">

          <Avatar
            src={participant.avatar ?? undefined}
            name={participant.name}
            size="lg"
          />


          <div className="min-w-0">

            <h3 className="truncate font-semibold text-slate-900">
              {participant.name}
            </h3>

            <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">

              <Clock3
                size={14}
              />

              {participant.nextTime}

            </p>

          </div>

        </div>


        <ChevronRight
          size={18}
          className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
        />

      </div>



      {/* Activity */}

      <div className="mt-5 rounded-2xl bg-slate-50 p-3">

        <p className="text-xs uppercase tracking-wide text-slate-400">
          Next Activity
        </p>

        <p className="mt-1 font-medium text-slate-800">
          {participant.nextActivity}
        </p>

      </div>



      {/* Status */}

      <div className="mt-4">

        <Badge
          variant={status.variant}
          size="sm"
        >
          {status.label}
        </Badge>

      </div>


    </motion.button>
  );
}