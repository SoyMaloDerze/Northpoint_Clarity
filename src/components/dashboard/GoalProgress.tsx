import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock3, Target } from "lucide-react";

import Card from "../ui/Card";
import InteractiveProgress from "../ui/InteractiveProgress";

import { goals } from "../../mock/goals";
import { GOAL_STATUS } from "../../types/goal";
import { cardHover, smoothTransition } from "../../lib/motion";

export default function GoalProgress() {
    const completed = goals.filter(
        (goal) => goal.status === GOAL_STATUS.COMPLETED,
    ).length;

    const inProgress = goals.filter(
        (goal) => goal.status === GOAL_STATUS.IN_PROGRESS,
    ).length;

    const notStarted = goals.filter(
        (goal) => goal.status === GOAL_STATUS.NOT_STARTED,
    ).length;

  const completion =
    Math.round((completed / goals.length) * 100);

  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
    >
      <Card className="rounded-4xl border-slate-200 p-7">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Goal Progress
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Overall participant goal completion across
              active support plans.
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
            <Target
              size={24}
              className="text-emerald-600"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Percentage */}

        <div className="mt-8 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Completion
            </p>

            <h3 className="text-5xl font-black tracking-tight text-slate-900">
              {completion}%
            </h3>
          </div>

          <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            +6% this month
          </div>
        </div>

        {/* Progress */}

        <div className="mt-8">
          <InteractiveProgress
            value={completion}
            title="Goal Breakdown"
            subtitle="Current completion overview"
            height="lg"
            insights={[
              {
                label: "Completed",
                value: completed,
                color: "bg-emerald-500",
              },
              {
                label: "In Progress",
                value: inProgress,
                color: "bg-amber-500",
              },
              {
                label: "Not Started",
                value: notStarted,
                color: "bg-slate-400",
              },
            ]}
          />
        </div>

        {/* Summary */}

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2
                size={18}
                className="text-emerald-600"
              />

              <span className="text-sm text-slate-600">
                Completed
              </span>
            </div>

            <span className="font-semibold text-slate-900">
              {completed}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock3
                size={18}
                className="text-amber-500"
              />

              <span className="text-sm text-slate-600">
                In Progress
              </span>
            </div>

            <span className="font-semibold text-slate-900">
              {inProgress}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Circle
                size={18}
                className="text-slate-400"
              />

              <span className="text-sm text-slate-600">
                Not Started
              </span>
            </div>

            <span className="font-semibold text-slate-900">
              {notStarted}
            </span>
          </div>
        </div>

        {/* Insight */}

        <div className="mt-8 rounded-2xl bg-emerald-50 p-4">
          <p className="text-sm leading-7 text-emerald-800">
            Goal completion continues to improve steadily.
            Most participants currently have active or
            completed support goals, indicating positive
            engagement across the service.
          </p>
        </div>
      </Card>
    </motion.div>
  );
}