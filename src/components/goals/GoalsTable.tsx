import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  listItemHover,
  smoothTransition,
} from "../../lib/motion";

import type { Goal } from "../../types/goal";

type GoalsTableProps = {
  goals: Goal[];

  onOpenGoal?: (
    goal: Goal,
  ) => void;
};

export default function GoalsTable({
  goals,
  onOpenGoal,
}: GoalsTableProps) {
  return (
    <Card className="hidden overflow-hidden rounded-4xl border-slate-200 md:block">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Goal
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Category
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Progress
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Target Date
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
            {goals.map((goal) => (
              <motion.tr
                key={goal.id}
                whileHover={listItemHover}
                transition={smoothTransition}
                className="border-b border-slate-100 transition-colors duration-300 hover:bg-slate-50"
              >
                <td className="max-w-sm px-6 py-5">
                  <p className="font-semibold text-slate-900">
                    {goal.title}
                  </p>

                  <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                    {goal.description}
                  </p>
                </td>

                <td className="px-6 py-5">
                  <Badge variant="info">
                    {goal.category}
                  </Badge>
                </td>

                <td className="w-64 px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: `${goal.progress}%`,
                        }}
                        transition={{
                          duration: 0.7,
                        }}
                        className="h-full rounded-full bg-emerald-600"
                      />
                    </div>

                    <span className="w-12 text-right text-sm font-semibold text-slate-700">
                      {goal.progress}%
                    </span>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <CalendarDays
                      size={16}
                      className="text-slate-400"
                    />

                    {goal.targetDate}
                  </div>
                </td>

                <td className="px-6 py-5 text-nowrap">
                  <Badge
                    variant={
                      goal.status === "completed"
                        ? "success"
                        : goal.status === "in-progress"
                          ? "warning"
                          : "neutral"
                    }
                  >
                    {goal.status}
                  </Badge>
                </td>

                <td className="px-6 py-5 text-right">
                  <Button
                    title="View Goal"
                    size="sm"
                    variant="secondary"
                    rightIcon={
                      <ArrowUpRight
                        size={15}
                        aria-hidden="true"
                      />
                    }
                    onClick={() =>
                      onOpenGoal?.(goal)
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