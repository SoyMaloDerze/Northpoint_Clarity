import ParticipantCard from "./ParticipantCard";

import type { Participant } from "../../../types/participant";
import { staggerContainer, staggerItem } from "../../../lib/motion";
import { motion } from "framer-motion";

type ParticipantGridProps = {
  participants: Participant[];
};

export default function ParticipantGrid({
  participants,
}: ParticipantGridProps) {
  return (
    <motion.section
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3"
    >
        {participants.map((participant) => (
            <motion.div
                key={participant.id}
                variants={staggerItem}
            >
                <ParticipantCard participant={participant} />
            </motion.div>
        ))}
    </motion.section>
  );
}