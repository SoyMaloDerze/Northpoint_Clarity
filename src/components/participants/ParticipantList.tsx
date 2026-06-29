import { motion } from "framer-motion";

import ParticipantCard from "./ParticipantCard";
import EmptyParticipants from "./EmptyParticipants";

import {
  staggerContainer,
  staggerItem,
} from "../../lib/motion";

import type { Participant } from "../../types/participant";

type ParticipantListProps = {
  participants: Participant[];

  onOpenParticipant?: (
    participant: Participant,
  ) => void;
};

export default function ParticipantList({
  participants,
  onOpenParticipant,
}: ParticipantListProps) {
  if (participants.length === 0) {
    return <EmptyParticipants />;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid gap-5 xl:grid-cols-2"
    >
      {participants.map((participant) => (
        <motion.div
          key={participant.id}
          variants={staggerItem}
          className="mx-auto w-full max-w-82 sm:max-w-none"
        >
          <ParticipantCard
            participant={participant}
            onOpen={onOpenParticipant}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}