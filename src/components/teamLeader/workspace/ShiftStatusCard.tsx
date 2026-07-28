import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Target,
} from "lucide-react";

import Badge from "../../ui/Badge";

import type {
  WorkspaceShift,
} from "../../../types/workspace";

import {
  smoothTransition,
} from "../../../lib/motion";


type ShiftStatusCardProps = {
  shift: WorkspaceShift;
  onOpen?: () => void;
};


export default function ShiftStatusCard({
  shift, onOpen,
}: ShiftStatusCardProps) {
  return (
    <motion.section
      onClick={onOpen}
      role={onOpen ? "button" : undefined}
      whileHover={{
        y: -3,
      }}
      transition={smoothTransition}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >

      {/* subtle background glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-100/40 blur-3xl" />


      <div className="relative">

        {/* Header */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
              Current Shift
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              {shift.startTime}
              {" - "}
              {shift.endTime}
            </h2>
          </div>


          <Badge
            variant={
              shift.status === "active"
                ? "success"
                : "neutral"
            }
            size="lg"
          >
            {shift.status}
          </Badge>

        </div>


        {/* Progress */}

        <div className="mt-8">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm font-medium text-slate-500">
              Shift Completion
            </span>

            <span className="text-sm font-semibold text-slate-900">
              {shift.completion}%
            </span>

          </div>


          <div className="h-3 overflow-hidden rounded-full bg-slate-100">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${shift.completion}%`,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="h-full rounded-full bg-emerald-500"
            />

          </div>

        </div>



        {/* Stats */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <Target size={20} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Completed
              </p>

              <p className="font-semibold text-slate-900">
                {shift.completedTasks}
                {" / "}
                {shift.totalTasks}
              </p>
            </div>

          </div>



          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Clock3 size={20} />
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                Next Activity
              </p>

              <p className="line-clamp-1 font-semibold text-slate-900">
                {shift.nextActivity ?? "No upcoming tasks"}
              </p>
            </div>

          </div>

        </div>



        {/* Action */}

        <button
          type="button"
          className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
        >
          View Shift Details

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />

        </button>


      </div>

    </motion.section>
  );
}