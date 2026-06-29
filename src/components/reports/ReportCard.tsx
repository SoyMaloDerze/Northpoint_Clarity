import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  CalendarDays,
  CircleCheck,
  CircleDashed,
  TriangleAlert,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  cardHover,
  cardTap,
  smoothTransition,
} from "../../lib/motion";

import type { Report } from "../../types/report";

type ReportCardProps = {
  report: Report;
  onOpen?: (report: Report) => void;
};

export default function ReportCard({
  report,
  onOpen,
}: ReportCardProps) {
  const completedOutcomes =
    report.outcomes.filter(
      (outcome) => outcome.achieved,
    ).length;

  const totalOutcomes =
    report.outcomes.length;

  const moodVariant =
    report.mood === "positive"
      ? "success"
      : report.mood === "neutral"
        ? "info"
        : "danger";

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
            <h3 className="text-xl font-bold text-slate-900">
              Shift Report
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Shift ID: {report.shiftId}
            </p>
          </div>

          <Badge variant={moodVariant}>
            {report.mood}
          </Badge>
        </div>

        {/* Summary */}

        <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
            Summary
          </p>

          <p className="mt-3 line-clamp-4 leading-7 text-slate-700">
            {report.summary}
          </p>
        </div>

        {/* Metrics */}

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Outcomes
            </p>

            <div className="mt-2 flex items-center gap-2 text-slate-900">
              <CircleCheck
                size={16}
                className="text-emerald-600"
              />

              <span className="font-semibold">
                {completedOutcomes} / {totalOutcomes} Achieved
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Submitted
            </p>

            <div className="mt-2 flex items-center gap-2 text-slate-900">
              <CalendarDays
                size={16}
                className="text-slate-400"
              />

              <span className="font-semibold">
                {report.submittedAt}
              </span>
            </div>
          </div>
        </div>

        {/* AI Confidence */}

        <div className="mt-7 rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-center gap-2">
            <Brain
              size={18}
              className="text-emerald-600"
            />

            <p className="font-semibold text-emerald-900">
              AI Confidence
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-3xl font-bold text-emerald-700">
              {Math.round(report.aiConfidence)}%
            </span>

            <div className="h-2 w-36 overflow-hidden rounded-full bg-emerald-100">
              <div
                className="h-full rounded-full bg-emerald-600 transition-all duration-500"
                style={{
                  width: `${report.aiConfidence}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            {report.pdfUrl ? (
              <>
                <CircleCheck
                  size={16}
                  className="text-emerald-600"
                />

                PDF Available
              </>
            ) : (
              <>
                <CircleDashed
                  size={16}
                  className="text-amber-500"
                />

                PDF Pending
              </>
            )}
          </div>

          <Button
            title="View Report"
            variant="secondary"
            rightIcon={
              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            }
            onClick={() => onOpen?.(report)}
          >
            View Report
          </Button>
        </div>

        {/* Recommendation */}

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
          <TriangleAlert
            size={18}
            className="mt-0.5 text-amber-500"
          />

          <div>
            <p className="text-sm font-semibold text-slate-900">
              Recommendation
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {report.recommendation}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}