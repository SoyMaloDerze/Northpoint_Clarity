import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  CalendarDays,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  listItemHover,
  smoothTransition,
} from "../../lib/motion";

import type { Report } from "../../types/report";

type ReportsTableProps = {
  reports: Report[];

  onOpenReport?: (
    report: Report,
  ) => void;
};

export default function ReportsTable({
  reports,
  onOpenReport,
}: ReportsTableProps) {
  return (
    <Card className="hidden overflow-hidden rounded-4xl border-slate-200 md:block">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Shift
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Mood
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Outcomes
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                AI Confidence
              </th>

              <th className="px-6 py-5 text-left text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Submitted
              </th>

              <th className="px-6 py-5 text-right text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => {
              const completed =
                report.outcomes.filter(
                  (outcome) => outcome.achieved,
                ).length;

              return (
                <motion.tr
                  key={report.id}
                  whileHover={listItemHover}
                  transition={smoothTransition}
                  className="border-b border-slate-100 transition-colors duration-300 hover:bg-slate-50"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {report.shiftId}
                      </p>

                      <p className="text-sm text-slate-500">
                        Report #{report.id}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <Badge
                      variant={
                        report.mood === "positive"
                          ? "success"
                          : report.mood === "neutral"
                            ? "info"
                            : "danger"
                      }
                    >
                      {report.mood}
                    </Badge>
                  </td>

                  <td className="px-6 py-5 text-sm text-slate-700">
                    {completed} / {report.outcomes.length}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <Brain
                        size={16}
                        className="text-emerald-600"
                      />

                      <span className="font-semibold text-slate-900">
                        {Math.round(
                          report.aiConfidence,
                        )}
                        %
                      </span>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CalendarDays
                        size={16}
                        className="text-slate-400"
                      />

                      {report.submittedAt}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-right">
                    <Button
                      title="View Report"
                      size="sm"
                      variant="secondary"
                      rightIcon={
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                        />
                      }
                      onClick={() =>
                        onOpenReport?.(report)
                      }
                    >
                      View
                    </Button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}