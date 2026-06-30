import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  ChevronRight,
//   Clock3,
  Pencil,
  Target,
  TrendingUp,
  UserRound,
  X,
} from "lucide-react";

import Badge from "../ui/Badge";

import {
  drawerVariants,
  modalBackdrop,
  slideDownVariants,
  smoothTransition,
} from "../../lib/motion";

import type { Goal } from "../../types/goal";

type GoalDrawerProps = {
  open: boolean;
  goal: Goal | null;
  onClose: () => void;
};

type ActionItem = {
  label: string;
  icon: React.ElementType;
};

const actions: ActionItem[] = [
  {
    label: "Edit Goal",
    icon: Pencil,
  },
  {
    label: "Update Progress",
    icon: TrendingUp,
  },
  {
    label: "View Participant",
    icon: UserRound,
  },
  {
    label: "Archive Goal",
    icon: Target,
  },
];

export default function GoalDrawer({
  open,
  goal,
  onClose,
}: GoalDrawerProps) {
  useEffect(() => {
    if (!open || !goal) return;

    const html =
      document.documentElement;

    const body = document.body;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyOverflow =
      body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow =
        previousHtmlOverflow;

      body.style.overflow =
        previousBodyOverflow;
    };
  }, [open, goal]);

  if (!goal) return null;

  const badgeVariant =
    goal.status === "completed"
      ? "success"
      : goal.status ===
          "in-progress"
        ? "warning"
        : "neutral";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}

          <motion.div
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={
              smoothTransition
            }
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm"
          />

          {/* Desktop Drawer */}

          <motion.aside
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={
              smoothTransition
            }
            className="fixed right-0 top-0 z-60 hidden h-dvh w-140 flex-col border-l border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] lg:flex"
          >
            {/* Header */}

            <header className="border-b border-slate-200 p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge
                      variant="info"
                    >
                      {
                        goal.category
                      }
                    </Badge>

                    <Badge
                      variant={
                        badgeVariant
                      }
                    >
                      {goal.status}
                    </Badge>
                  </div>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                    {goal.title}
                  </h2>

                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <CalendarDays
                      size={16}
                    />

                    <span>
                      Target{" "}
                      {
                        goal.targetDate
                      }
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Close goal"
                  onClick={
                    onClose
                  }
                  className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                >
                  <X
                    size={22}
                  />
                </button>
              </div>
            </header>

            {/* Body */}

            <div className="flex-1 space-y-8 overflow-y-auto p-8">
              {/* Progress */}

              <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                      Goal Progress
                    </p>

                    <h3 className="mt-3 text-4xl font-black text-emerald-700">
                      {goal.progress}%
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600">
                    <TrendingUp
                      size={26}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-emerald-100">
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
              </section>

              {/* Description */}

              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <Target
                    size={18}
                    className="text-emerald-600"
                  />

                  <h3 className="font-bold text-slate-900">
                    Goal Description
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-700">
                  {goal.description}
                </p>
              </section>

              {/* Details */}

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Goal Details
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <InfoItem
                    label="Category"
                    value={goal.category}
                  />

                  <InfoItem
                    label="Status"
                    value={goal.status}
                  />

                  <InfoItem
                    label="Target Date"
                    value={goal.targetDate}
                  />

                  <InfoItem
                    label="Last Updated"
                    value={goal.updatedAt}
                  />
                </div>
              </section>

              {/* Timeline */}

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Progress Timeline
                </h3>

                <div className="space-y-5">
                  <TimelineItem
                    title="Goal created"
                    date={goal.updatedAt}
                  />

                  <TimelineItem
                    title="Progress updated"
                    date="2 weeks ago"
                  />

                  <TimelineItem
                    title="Target completion"
                    date={goal.targetDate}
                  />
                </div>
              </section>

              {/* Quick Actions */}

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Quick Actions
                </h3>

                <div className="overflow-hidden rounded-3xl border border-slate-200">
                  {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <button
                        key={action.label}
                        type="button"
                        className="flex w-full items-center justify-between border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50 last:border-0"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={18}
                            className="text-slate-500"
                          />

                          <span className="font-medium text-slate-800">
                            {action.label}
                          </span>
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
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <h2 className="text-xl font-bold text-slate-900">
                Goal Details
              </h2>

              <button
                type="button"
                aria-label="Close goal"
                onClick={onClose}
                className="rounded-xl p-2 transition hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}

            <div className="flex-1 overflow-y-auto p-5">
              <div className="flex items-center gap-4">
                <Badge variant="info">
                  {goal.category}
                </Badge>

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
              </div>

              {/* Progress */}

              <section className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-emerald-700">
                    Progress
                  </p>

                  <p className="text-xl font-black text-emerald-700">
                    {goal.progress}%
                  </p>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-emerald-100">
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
              </section>

              {/* Description */}

              <section className="mt-7">
                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  Goal Description
                </h3>

                <p className="leading-7 text-slate-700">
                  {goal.description}
                </p>
              </section>

              {/* Details */}

              <section className="mt-8 space-y-5">
                <InfoItem
                  label="Target Date"
                  value={goal.targetDate}
                />

                <InfoItem
                  label="Last Updated"
                  value={goal.updatedAt}
                />
              </section>

              {/* Timeline */}

              <section className="mt-8">
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Progress Timeline
                </h3>

                <div className="space-y-5">
                  <TimelineItem
                    title="Goal created"
                    date={goal.updatedAt}
                  />

                  <TimelineItem
                    title="Progress updated"
                    date="2 weeks ago"
                  />

                  <TimelineItem
                    title="Target completion"
                    date={goal.targetDate}
                  />
                </div>
              </section>

              {/* Quick Actions */}

              <section className="mt-8">
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Quick Actions
                </h3>

                <div className="overflow-hidden rounded-3xl border border-slate-200">
                  {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                      <button
                        key={action.label}
                        type="button"
                        className="flex w-full items-center justify-between border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50 last:border-0"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            size={18}
                            className="text-slate-500"
                          />

                          <span className="font-medium text-slate-800">
                            {action.label}
                          </span>
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

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function TimelineItem({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />

      <div>
        <p className="font-medium text-slate-900">
          {title}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {date}
        </p>
      </div>
    </div>
  );
}
