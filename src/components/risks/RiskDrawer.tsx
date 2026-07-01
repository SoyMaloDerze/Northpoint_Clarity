import { useEffect } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  CalendarClock,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  Pencil,
  ShieldAlert,
  TriangleAlert,
  UserRound,
  X,
} from "lucide-react";

import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";

import {
  drawerVariants,
  modalBackdrop,
  slideDownVariants,
  smoothTransition,
} from "../../lib/motion";

import type { Risk } from "../../types/risk";

type RiskDrawerProps = {
  open: boolean;

  risk: Risk | null;

  participantName: string;

  onClose: () => void;
};

type ActionItem = {
  label: string;
  icon: React.ElementType;
};

const actions: ActionItem[] = [
  {
    label: "Update Risk",
    icon: Pencil,
  },
  {
    label: "Assign Staff",
    icon: UserRound,
  },
  {
    label: "Mark Resolved",
    icon: ClipboardCheck,
  },
  {
    label: "Review Timeline",
    icon: Clock3,
  },
];

export default function RiskDrawer({
  open,
  risk,
  participantName,
  onClose,
}: RiskDrawerProps) {
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!risk) {
    return null;
  }

  const level = getLevelStyles(
    risk.level,
  );

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
            transition={smoothTransition}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/40 backdrop-blur-sm"
          />

          {/* Desktop */}

          <motion.aside
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            className="fixed right-0 top-0 z-60 hidden h-dvh w-140 flex-col border-l border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] lg:flex"
          >
            {/* Header */}

            <header
              className={`border-b px-8 py-7 ${level.border}`}
            >
              <div className="flex items-start justify-between gap-5">

                <div>

                  <div className="flex items-center gap-3">

                    <motion.div
                      animate={
                        risk.level ===
                        "critical"
                          ? {
                              scale: [
                                1,
                                1.15,
                                1,
                              ],
                              opacity: [
                                1,
                                0.65,
                                1,
                              ],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <TriangleAlert
                        size={22}
                        className={
                          level.text
                        }
                      />
                    </motion.div>

                    <Badge
                      variant={
                        risk.level ===
                          "critical" ||
                        risk.level ===
                          "high"
                          ? "danger"
                          : risk.level ===
                              "medium"
                            ? "warning"
                            : "success"
                      }
                    >
                      {risk.level} Risk
                    </Badge>

                  </div>

                  <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
                    {risk.title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {risk.description}
                  </p>

                </div>

                <button
                  aria-label="close"
                  onClick={onClose}
                  className="rounded-xl p-2 transition hover:bg-slate-100"
                >
                  <X size={22} />
                </button>

              </div>
            </header>

            {/* Body */}

            <div className="flex-1 space-y-8 overflow-y-auto p-8">
                              {/* Participant */}

              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-4">
                  <Avatar
                    name={participantName}
                    size="lg"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Affected Participant
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-slate-900">
                      {participantName}
                    </h3>
                  </div>
                </div>
              </section>

              {/* Risk Details */}

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Risk Details
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <InfoItem
                    label="Category"
                    value={risk.category}
                  />

                  <InfoItem
                    label="Status"
                    value={risk.status}
                  />

                  <InfoItem
                    label="Assigned To"
                    value={risk.assignedTo}
                  />

                  <InfoItem
                    label="Review Date"
                    value={risk.reviewDate}
                  />
                </div>
              </section>

              {/* Monitoring */}

              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <ShieldAlert
                    size={18}
                    className={level.text}
                  />

                  <h3 className="font-bold text-slate-900">
                    Monitoring Status
                  </h3>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Current Level
                    </p>

                    <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-900 capitalize">
                      {risk.level}
                    </h3>
                  </div>

                  <motion.div
                    animate={
                      risk.level ===
                      "critical"
                        ? {
                            scale: [
                              1,
                              1.12,
                              1,
                            ],
                            opacity: [
                              1,
                              0.65,
                              1,
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className={`flex h-16 w-16 items-center justify-center rounded-3xl ${level.icon}`}
                  >
                    <TriangleAlert
                      size={28}
                    />
                  </motion.div>
                </div>
              </section>

              {/* Timeline */}

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Activity Timeline
                </h3>

                <div className="space-y-5">

                  <TimelineItem
                    title="Risk identified"
                    date={risk.identifiedAt}
                    icon={TriangleAlert}
                  />

                  <TimelineItem
                    title="Assigned for monitoring"
                    date="Yesterday"
                    icon={UserRound}
                  />

                  <TimelineItem
                    title="Next scheduled review"
                    date={risk.reviewDate}
                    icon={CalendarClock}
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
                    const Icon =
                      action.icon;

                    return (
                      <button
                        key={
                          action.label
                        }
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

            <div
              className={`border-b px-5 py-4 ${level.border}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      risk.level ===
                        "critical" ||
                      risk.level ===
                        "high"
                        ? "danger"
                        : risk.level ===
                            "medium"
                          ? "warning"
                          : "success"
                    }
                  >
                    {risk.level} Risk
                  </Badge>

                  <span className="text-sm font-semibold text-slate-500">
                    {risk.status}
                  </span>
                </div>

                <button
                  aria-label="close"
                  type="button"
                  onClick={onClose}
                  className="rounded-xl p-2 transition hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                {risk.title}
              </h2>
            </div>

            {/* Body */}

            <div className="flex-1 space-y-8 overflow-y-auto p-5">
              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-4">
                  <Avatar
                    name={participantName}
                    size="lg"
                  />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Participant
                    </p>

                    <h3 className="mt-2 font-bold text-slate-900">
                      {participantName}
                    </h3>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  Description
                </h3>

                <p className="leading-7 text-slate-700">
                  {risk.description}
                </p>
              </section>

              <section className="space-y-5">
                <InfoItem
                  label="Category"
                  value={risk.category}
                />

                <InfoItem
                  label="Assigned To"
                  value={risk.assignedTo}
                />

                <InfoItem
                  label="Review Date"
                  value={risk.reviewDate}
                />

                <InfoItem
                  label="Identified"
                  value={risk.identifiedAt}
                />
              </section>

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Timeline
                </h3>

                <div className="space-y-5">
                  <TimelineItem
                    title="Risk identified"
                    date={risk.identifiedAt}
                    icon={TriangleAlert}
                  />

                  <TimelineItem
                    title="Monitoring started"
                    date="Yesterday"
                    icon={ShieldAlert}
                  />

                  <TimelineItem
                    title="Next review"
                    date={risk.reviewDate}
                    icon={CalendarClock}
                  />
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
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 font-semibold capitalize text-slate-900">
        {value}
      </p>
    </div>
  );
}

function TimelineItem({
  title,
  date,
  icon: Icon,
}: {
  title: string;
  date: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100">
        <Icon
          size={18}
          className="text-slate-600"
        />
      </div>

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

function getLevelStyles(
  level: Risk["level"],
) {
  switch (level) {
    case "critical":
      return {
        border:
          "border-red-200",
        text:
          "text-red-600",
        icon:
          "bg-red-100 text-red-600",
      };

    case "high":
      return {
        border:
          "border-orange-200",
        text:
          "text-orange-600",
        icon:
          "bg-orange-100 text-orange-600",
      };

    case "medium":
      return {
        border:
          "border-amber-200",
        text:
          "text-amber-600",
        icon:
          "bg-amber-100 text-amber-600",
      };

    default:
      return {
        border:
          "border-emerald-200",
        text:
          "text-emerald-600",
        icon:
          "bg-emerald-100 text-emerald-600",
      };
  }
}
