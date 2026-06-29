import { UsersRound, Plus } from "lucide-react";
import { motion } from "framer-motion";

import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  fadeVariants,
  smoothTransition,
} from "../../lib/motion";

type EmptyParticipantsProps = {
  onAddParticipant?: () => void;
};

export default function EmptyParticipants({
  onAddParticipant,
}: EmptyParticipantsProps) {
  return (
    <motion.div
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={smoothTransition}
    >
      <Card className="rounded-4xl border border-dashed border-slate-300 px-8 py-16 text-center shadow-sm">
        {/* Icon */}

        <motion.div 
            animate={{
                y: [0, -3, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-4xl bg-slate-100"
        >
          <UsersRound
            size={36}
            className="text-slate-400"
          />
        </motion.div>

        {/* Content */}

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
          No participants yet
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
          Once participants are added to Northpoint Clarity,
          they'll appear here where you can manage their
          support plans, goals, reports and daily activities.
        </p>

        {/* CTA */}

        <div className="mt-10">
          <Button
            title="Add Participant"
            size="lg"
            leftIcon={
              <Plus
                size={18}
                aria-hidden="true"
              />
            }
            onClick={onAddParticipant}
          >
            Add Participant
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}