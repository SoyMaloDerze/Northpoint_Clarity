import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  FileText,
  UserRound,
  X,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";

import {
  modalBackdrop,
  modalContainer,
  smoothTransition,
} from "../../lib/motion";

import type { Notification } from "../../types/notification";

type UpdateModalProps = {
  open: boolean;
  update: Notification | null;
  onClose: () => void;
};

export default function UpdateModal({
  open,
  update,
  onClose,
}: UpdateModalProps) {
  return (
    <AnimatePresence>
      {open && update && (
        <>
          {/* Backdrop */}

          <motion.div
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-md"
          />

          {/* Container */}

          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-8">
            <motion.article
              variants={modalContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={smoothTransition}
              onClick={(event) => event.stopPropagation()}
              className="
                flex
                h-dvh
                w-full
                flex-col
                overflow-hidden
                bg-white

                md:mx-auto
                md:my-8
                md:h-[calc(100dvh-4rem)]
                md:max-h-230
                md:max-w-4xl
                md:rounded-4xl
                md:border
                md:border-white/60
                md:shadow-[0_35px_100px_rgba(15,23,42,0.30)]
              "
            >
              {/* ================= MOBILE ================= */}

              <div className="flex h-full flex-col md:hidden">
                {/* Header */}

                <header className="border-b border-slate-200 bg-white px-5 pb-5 pt-6">
                  <div className="flex items-start justify-between">
                    <Badge variant="primary">
                      {update.type.toUpperCase()}
                    </Badge>

                    <button
                      type="button"
                      title="Close"
                      onClick={onClose}
                      className="rounded-xl p-2 text-slate-500 transition-all duration-300 hover:bg-slate-100"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <h1 className="mt-5 text-[2rem] font-black leading-tight tracking-tight text-slate-900">
                    {update.title}
                  </h1>

                  <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />

                      <span>{update.createdAt}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <FileText size={16} />

                      <span>Operations Brief</span>
                    </div>
                  </div>
                </header>

                {/* Scrollable */}

                <div className="flex-1 overflow-y-auto">
                  <div className="space-y-7 px-5 py-6">

                    {/* Summary */}
                                        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                        Summary
                      </p>

                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {update.message}
                      </p>
                    </section>

                    {/* Details */}

                    <section>
                      <h2 className="text-lg font-bold text-slate-900">
                        Details
                      </h2>

                      <div className="mt-4 space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="flex items-center gap-3">
                            <UserRound
                              size={18}
                              className="text-slate-400"
                            />

                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                Participant
                              </p>

                              <p className="mt-1 font-semibold text-slate-900">
                                Michael Brown
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <div className="flex items-center gap-3">
                            <UserRound
                              size={18}
                              className="text-slate-400"
                            />

                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                                Updated By
                              </p>

                              <p className="mt-1 font-semibold text-slate-900">
                                Sarah Johnson
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                              Category
                            </p>

                            <div className="mt-3">
                              <Badge variant="info">
                                {update.type}
                              </Badge>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                              Status
                            </p>

                            <div className="mt-3">
                              <Badge variant="success">
                                Completed
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Full Update */}

                    <section>
                      <h2 className="text-lg font-bold text-slate-900">
                        Full Update
                      </h2>

                      <div className="mt-4 space-y-5 text-sm leading-7 text-slate-600">
                        <p>
                          {update.message}
                        </p>

                        <p>
                          This operational update has been recorded within
                          Northpoint Clarity to provide administrators with
                          complete visibility into participant activity,
                          service delivery and organisational progress.
                        </p>

                        <p>
                          Review the operational details before taking any
                          required action. All information shown here has
                          been captured as part of the participant's
                          operational history.
                        </p>
                      </div>
                    </section>
                  </div>
                </div>

                {/* Footer */}

                <footer className="border-t border-slate-200 bg-white p-5 shadow-[0_-10px_30px_rgba(15,23,42,0.05)]">
                  <Button
                    title="Close Briefing"
                    size="lg"
                    fullWidth
                    onClick={onClose}
                  >
                    Close Briefing
                  </Button>
                </footer>
              </div>

              {/* ================= DESKTOP ================= */}

              <div className="hidden h-full flex-col md:flex">
                {/* Header */}

                <header className="border-b border-slate-200 px-8 py-7">
                    <div className="flex items-start justify-between gap-6">
                        <div className="max-w-3xl">
                        <Badge
                            variant="primary"
                            pill={false}
                        >
                            {update.type.toUpperCase()}
                        </Badge>

                        <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900">
                            {update.title}
                        </h1>

                        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                            <CalendarDays size={16} />

                            {update.createdAt}
                            </div>

                            <div className="flex items-center gap-2">
                            <FileText size={16} />

                            Operations Briefing
                            </div>
                        </div>
                        </div>

                        <button
                        type="button"
                        title="Close briefing"
                        onClick={onClose}
                        className="rounded-2xl p-3 text-slate-500 transition-all duration-300 hover:bg-slate-100 hover:text-slate-900"
                        >
                        <X size={22} />
                        </button>
                    </div>
                </header>

                {/* Body */}

                <div className="flex-1 overflow-y-auto px-8 py-8">
                    {/* Executive Summary */}

                    <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
                        Executive Summary
                        </p>

                        <p className="mt-4 text-[15px] leading-8 text-emerald-900">
                        {update.message}
                        </p>
                    </section>

                {/* Operational Brief */}

                <section className="mt-10">
                    <h2 className="text-xl font-bold text-slate-900">
                        Operational Brief
                    </h2>

                    <div className="mt-5 max-w-3xl space-y-6 text-[16px] leading-9 text-slate-700">
                        <p>
                            {update.message}
                        </p>

                        <p>
                            This operational update has been recorded within
                            Northpoint Clarity to provide administrators with
                            complete visibility into participant activity,
                            service delivery and organisational progress.
                        </p>

                        <p>
                            Review the operational details below for
                            additional context before taking any required
                            action.
                        </p>
                    </div>
                </section>

                {/* Details */}

                <section className="mt-12 border-t border-slate-200 pt-8">
                    <h2 className="text-xl font-bold text-slate-900">
                    Operational Details
                    </h2>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                                Participant
                            </p>

                            <div className="mt-3 flex items-center gap-3">
                            <UserRound
                                size={18}
                                className="text-slate-400"
                            />

                            <p className="font-semibold text-slate-900">
                                Michael Brown
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Updated By
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                        <UserRound
                            size={18}
                            className="text-slate-400"
                        />

                        <p className="font-semibold text-slate-900">
                            Sarah Johnson
                        </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Category
                        </p>

                        <div className="mt-3">
                        <Badge variant="info">
                            {update.type}
                        </Badge>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Status
                        </p>

                        <div className="mt-3">
                        <Badge variant="success">
                            Completed
                        </Badge>
                        </div>
                    </div>
                    </div>
                </section>
                </div>

                {/* Footer */}

                <footer className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-8 py-6">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Last Updated
                    </p>

                    <p className="mt-2 text-sm text-slate-700">
                    {update.createdAt}
                    </p>
                </div>

                <Button
                    title="Close Briefing"
                    size="lg"
                    onClick={onClose}
                >
                    Close Briefing
                </Button>
                </footer>
              </div>
            </motion.article>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}