import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Flag,
  Target,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  cardHover,
  cardTap,
  smoothTransition,
} from "../../lib/motion";

import type { Goal } from "../../types/goal";

type GoalCardProps = {
  goal: Goal;
  onOpen?: (goal: Goal) => void;
};

export default function GoalCard({
  goal,
  onOpen,
}: GoalCardProps) {
  const badgeVariant =
    goal.status === "completed"
      ? "success"
      : goal.status === "in-progress"
        ? "warning"
        : "neutral";

  return (
    <motion.div
      whileHover={cardHover}
      whileTap={cardTap}
      transition={smoothTransition}
    >
      <Card className="rounded-4xl border-slate-200 p-6 shadow-sm">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <Flag
                size={18}
                className="text-emerald-600"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {goal.category}
              </p>
            </div>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              {goal.title}
            </h3>
          </div>

          <Badge className="text-nowrap" variant={badgeVariant}>
            {goal.status}
          </Badge>
        </div>

        {/* Description */}

        <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Goal Description
          </p>

          <p className="mt-3 line-clamp-3 leading-7 text-slate-700">
            {goal.description}
          </p>
        </div>

        {/* Progress */}

        <div className="mt-7">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-700">
              Progress
            </p>

            <span className="font-bold text-emerald-600">
              {goal.progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${goal.progress}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-full rounded-full bg-emerald-600"
            />
          </div>
        </div>

        {/* Footer */}

        <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays
              size={16}
              className="text-slate-400"
            />

            {goal.targetDate}
          </div>

          <Button
            title="View Goal"
            variant="secondary"
            rightIcon={
              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            }
            onClick={() => onOpen?.(goal)}
          >
            View Goal
          </Button>
        </div>

        {/* Updated */}

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
          <Target
            size={18}
            className="text-emerald-600"
          />

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Last Updated
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {goal.updatedAt}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}