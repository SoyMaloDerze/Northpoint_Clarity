import { motion } from "framer-motion";

import EmptyGoals from "./EmptyGoals";
import GoalCard from "./GoalCard";

import {
  staggerContainer,
  staggerItem,
} from "../../lib/motion";

import type { Goal } from "../../types/goal";

type GoalListProps = {
  goals: Goal[];

  onOpenGoal?: (
    goal: Goal,
  ) => void;
};

export default function GoalList({
  goals,
  onOpenGoal,
}: GoalListProps) {
  if (goals.length === 0) {
    return <EmptyGoals />;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid gap-5 lg:grid-cols-2"
    >
      {goals.map((goal) => (
        <motion.div
          key={goal.id}
          variants={staggerItem}
          className="mx-auto w-full max-w-86.25 sm:max-w-none"
        >
          <GoalCard
            goal={goal}
            onOpen={onOpenGoal}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}