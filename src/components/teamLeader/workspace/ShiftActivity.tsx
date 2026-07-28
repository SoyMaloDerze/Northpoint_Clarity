import { motion } from "framer-motion";
import {
  FileText,
  HeartPulse,
  NotebookPen,
  Target,
  Users,
} from "lucide-react";

import type {
  ActivityEvent,
} from "../../../types/workspace";

import {
  staggerItem,
  smoothTransition,
} from "../../../lib/motion";


type ShiftActivityProps = {
  activities: ActivityEvent[];
};


const activityIcons = {
  visit: Users,
  report: FileText,
  note: NotebookPen,
  medication: HeartPulse,
  goal: Target,
};


export default function ShiftActivity({
  activities,
}: ShiftActivityProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Activity
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Recent Updates
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Recent actions from your current shift.
        </p>
      </div>



      {/* Activity List */}

      <div className="mt-6 space-y-4">

        {activities.map((activity) => {

          const Icon =
            activityIcons[activity.type];


          return (
            <motion.div
              key={activity.id}
              variants={staggerItem}
              initial="initial"
              animate="animate"
              whileHover={{
                x: 3,
              }}
              transition={smoothTransition}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 p-4 transition-colors hover:bg-slate-50"
            >

              {/* Icon */}

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">

                <Icon
                  size={19}
                  aria-hidden="true"
                />

              </div>



              {/* Content */}

              <div className="min-w-0">

                <p className="font-medium text-slate-900">
                  {activity.message}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {new Date(activity.time).toLocaleTimeString(
                    [],
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  )}
                </p>

              </div>


            </motion.div>
          );
        })}

      </div>

    </section>
  );
}