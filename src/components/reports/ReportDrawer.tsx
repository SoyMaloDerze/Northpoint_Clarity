import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Circle,
  Download,
  FileText,
  Pencil,
  Share2,
  TriangleAlert,
  X,
} from "lucide-react";

import Badge from "../ui/Badge";


import {
  drawerVariants,
  modalBackdrop,
  slideDownVariants,
  smoothTransition,
} from "../../lib/motion";

import type { Report } from "../../types/report";

type ReportDrawerProps = {
  open: boolean;
  report: Report | null;
  onClose: () => void;
};

const actions = [
  {
    label: "Download PDF",
    icon: Download,
  },
  {
    label: "Edit Report",
    icon: Pencil,
  },
  {
    label: "Share Report",
    icon: Share2,
  },
];

export default function ReportDrawer({
  open,
  report,
  onClose,
}: ReportDrawerProps) {
  useEffect(() => {
    if (!open || !report) return;

    const html = document.documentElement;
    const body = document.body;

    const htmlOverflow = html.style.overflow;
    const bodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = htmlOverflow;
      body.style.overflow = bodyOverflow;
    };
  }, [open, report]);

  if (!report) return null;

  const moodVariant =
    report.mood === "positive"
      ? "success"
      : report.mood === "neutral"
        ? "info"
        : "danger";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-sm"
          />

          {/* Desktop */}

          <motion.aside
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            className="fixed right-0 top-0 z-60 hidden h-dvh w-140 flex-col border-l border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,.18)] lg:flex"
          >
            <header className="flex items-start justify-between border-b border-slate-200 p-8">
              <div>
                <Badge variant={moodVariant}>
                  {report.mood}
                </Badge>

                <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                  Shift Report
                </h2>

                <p className="mt-2 text-slate-500">
                  Shift {report.shiftId}
                </p>
              </div>

              <button
                aria-label="close"
                onClick={onClose}
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <X size={22} />
              </button>
            </header>

            <div className="flex-1 space-y-8 overflow-y-auto p-8">

              <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-700">
                  Executive Summary
                </p>

                <p className="mt-4 leading-8 text-emerald-900">
                  {report.summary}
                </p>
              </section>

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Outcomes
                </h3>

                <div className="space-y-4">
                  {report.outcomes.map((outcome) => (
                    <div
                      key={outcome.title}
                      className="flex items-start gap-3"
                    >
                      {outcome.achieved ? (
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-emerald-600"
                        />
                      ) : (
                        <Circle
                          size={18}
                          className="mt-1 text-slate-300"
                        />
                      )}

                      <p className="leading-7 text-slate-700">
                        {outcome.title}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2">
                  <TriangleAlert
                    size={18}
                    className="text-amber-500"
                  />

                  <h3 className="font-bold text-slate-900">
                    Recommendation
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-700">
                  {report.recommendation}
                </p>
              </section>

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Report Intelligence
                </h3>

                <div className="space-y-5">
                  <InfoRow
                    icon={Brain}
                    label="AI Confidence"
                    value={`${Math.round(report.aiConfidence)}%`}
                  />

                  <InfoRow
                    icon={CalendarDays}
                    label="Submitted"
                    value={report.submittedAt}
                  />

                  <InfoRow
                    icon={FileText}
                    label="PDF"
                    value={
                      report.pdfUrl
                        ? "Available"
                        : "Pending"
                    }
                  />
                </div>
              </section>

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Quick Actions
                </h3>

                <div className="overflow-hidden rounded-3xl border border-slate-200">
                  {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <button
                        aria-label="next"
                        key={action.label}
                        className="flex w-full items-center justify-between border-b border-slate-100 px-5 py-4 hover:bg-slate-50 last:border-0"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={18}
                            className="text-slate-500"
                          />

                          <span>{action.label}</span>
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-slate-400"
                        />
                      </button>
                    );
                  })}
                </div>
              </section>

            </div>
          </motion.aside>

          {/* Mobile */}

          <motion.div
            variants={slideDownVariants}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={smoothTransition}
            className="fixed inset-0 z-60 flex flex-col bg-white lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h2 className="text-xl font-bold">
                Report
              </h2>

              <button aria-label="close" onClick={onClose}>
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto p-5">
              <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-700">
                  Executive Summary
                </p>

                <p className="mt-4 leading-8 text-emerald-900">
                  {report.summary}
                </p>
              </section>

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Outcomes
                </h3>

                <div className="space-y-4">
                  {report.outcomes.map((outcome) => (
                    <div
                      key={outcome.title}
                      className="flex items-start gap-3"
                    >
                      {outcome.achieved ? (
                        <CheckCircle2
                          size={18}
                          className="mt-1 text-emerald-600"
                        />
                      ) : (
                        <Circle
                          size={18}
                          className="mt-1 text-slate-300"
                        />
                      )}

                      <p className="leading-7 text-slate-700">
                        {outcome.title}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-2">
                  <TriangleAlert
                    size={18}
                    className="text-amber-500"
                  />

                  <h3 className="font-bold text-slate-900">
                    Recommendation
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-700">
                  {report.recommendation}
                </p>
              </section>

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Report Intelligence
                </h3>

                <div className="space-y-5">
                  <InfoRow
                    icon={Brain}
                    label="AI Confidence"
                    value={`${Math.round(report.aiConfidence)}%`}
                  />

                  <InfoRow
                    icon={CalendarDays}
                    label="Submitted"
                    value={report.submittedAt}
                  />

                  <InfoRow
                    icon={FileText}
                    label="PDF"
                    value={
                      report.pdfUrl
                        ? "Available"
                        : "Pending"
                    }
                  />
                </div>
              </section>

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Quick Actions
                </h3>

                <div className="overflow-hidden rounded-3xl border border-slate-200">
                  {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <button
                        aria-label="next"
                        key={action.label}
                        className="flex w-full items-center justify-between border-b border-slate-100 px-5 py-4 hover:bg-slate-50 last:border-0"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={18}
                            className="text-slate-500"
                          />

                          <span>{action.label}</span>
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-slate-400"
                        />
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
      <div className="flex items-center gap-3">
        <Icon
          size={18}
          className="text-slate-500"
        />

        <span className="font-medium text-slate-700">
          {label}
        </span>
      </div>

      <span className="font-semibold text-slate-900">
        {value}
      </span>
    </div>
  );
}