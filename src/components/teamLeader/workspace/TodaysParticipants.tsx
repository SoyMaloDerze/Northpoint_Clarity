import { motion } from "framer-motion";

import ParticipantQuickCard from "./ParticipantQuickCard";

import type {
  TodayParticipant,
} from "../../../types/workspace";

import {
  staggerContainer,
} from "../../../lib/motion";


type TodaysParticipantsProps = {
  participants: TodayParticipant[];
  onOpen?: (participant: TodayParticipant) => void;
};


export default function TodaysParticipants({
  participants, onOpen
}: TodaysParticipantsProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
            People Today
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            Today's Participants
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Your scheduled participant activities for this shift.
          </p>
        </div>


        <span className="text-sm font-medium text-slate-400">
          {participants.length} people
        </span>

      </div>



      {/* Cards */}

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mt-6 flex gap-4 overflow-x-auto pb-2"
      >

        {participants.map((participant) => (
          <ParticipantQuickCard
            key={participant.id}
            participant={participant}
            onOpen={onOpen}
          />
        ))}

      </motion.div>


    </section>
  );
}