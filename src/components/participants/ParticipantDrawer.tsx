import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import {
  CalendarDays,
  ChevronRight,
  Pencil,
//   Shield,
  Target,
//   UserRound,
  Users,
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

import type { Participant } from "../../types/participant";

type ParticipantDrawerProps = {
  open: boolean;
  participant: Participant | null;
  onClose: () => void;
};

type ActionItem = {
  label: string;
  icon: React.ElementType;
};

const actions: ActionItem[] = [
  {
    label: "Edit Participant",
    icon: Pencil,
  },
  {
    label: "View Goals",
    icon: Target,
  },
  {
    label: "View Reports",
    icon: CalendarDays,
  },
  {
    label: "Support Team",
    icon: Users,
  },
];

export default function ParticipantDrawer({
  open,
  participant,
  onClose,
}: ParticipantDrawerProps) {

  // disable background scroll
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
    };
  }, [open]);

  if (!participant) return null;

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

          {/* Desktop Drawer */}

          <motion.aside
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            className="fixed right-0 top-0 z-60 hidden h-dvh w-140 flex-col border-l border-slate-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.18)] lg:flex"
          >
            {/* Header */}

            <header className="flex items-start justify-between border-b border-slate-200 p-8">
              <div className="flex items-center gap-5">
                <Avatar
                  name={participant.fullName}
                  src={participant.avatar ?? undefined}
                  size="xl"
                />

                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                    {participant.fullName}
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Participant Profile
                  </p>

                  <div className="mt-4">
                    <Badge
                      variant={
                        participant.status === "active"
                          ? "success"
                          : "neutral"
                      }
                    >
                      {participant.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <button
                aria-label="close"
                onClick={onClose}
                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <X size={22} />
              </button>
            </header>

            {/* Body */}

            <div className="flex-1 overflow-y-auto p-8 space-y-8">

              {/* Details */}

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Participant Details
                </h3>

                <div className="grid gap-5 sm:grid-cols-2">

                  <InfoItem
                    label="Age"
                    value={`${participant.age}`}
                  />

                  <InfoItem
                    label="Gender"
                    value={participant.gender}
                  />

                  <InfoItem
                    label="NDIS Number"
                    value={participant.ndisNumber}
                  />

                  <InfoItem
                    label="Joined"
                    value={participant.joinedAt}
                  />

                </div>
              </section>

              {/* Goal */}

              <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-center gap-3">
                  <Target
                    size={18}
                    className="text-emerald-600"
                  />

                  <h3 className="font-bold text-slate-900">
                    Primary Goal
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-700">
                  {participant.primaryGoal}
                </p>
              </section>

              {/* Actions */}

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

              {/* Timeline */}

              <section>
                <h3 className="mb-5 text-lg font-bold text-slate-900">
                  Recent Activity
                </h3>

                <div className="space-y-5">

                  <TimelineItem
                    title="Participant profile created"
                    date={participant.joinedAt}
                  />

                  <TimelineItem
                    title="Support worker assigned"
                    date="2 weeks ago"
                  />

                  <TimelineItem
                    title="Primary goal updated"
                    date="Yesterday"
                  />

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

              <h2 className="text-xl font-bold text-slate-900">
                Participant
              </h2>

              <button
                aria-label="close"
                onClick={onClose}
                className="rounded-xl p-2 hover:bg-slate-100"
              >
                <X size={20} />
              </button>

            </div>

            <div className="flex-1 overflow-y-auto p-5">

              <div className="flex flex-col items-center">

                <Avatar
                  name={participant.fullName}
                  src={participant.avatar ?? undefined}
                  size="xl"
                />

                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  {participant.fullName}
                </h2>

                <p className="mt-2 text-slate-500">
                  {participant.age} years • {participant.gender}
                </p>

                <div className="mt-4">
                  <Badge
                    variant={
                      participant.status === "active"
                        ? "success"
                        : "neutral"
                    }
                  >
                    {participant.status}
                  </Badge>
                </div>

              </div>

              {/* Reuse desktop sections here if desired */}

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