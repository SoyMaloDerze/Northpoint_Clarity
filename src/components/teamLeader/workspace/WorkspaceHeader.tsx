import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";

import Badge from "../../ui/Badge";

import {
  fadeVariants,
  smoothTransition,
} from "../../../lib/motion";

type WorkspaceHeaderProps = {
  name: string;
  date: string;
  shiftTime: string;
  isActive: boolean;
};

export default function WorkspaceHeader({
  name,
  date,
  shiftTime,
  isActive,
}: WorkspaceHeaderProps) {
  return (
    <motion.section
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      transition={smoothTransition}
      className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
    >
      {/* Greeting */}

      <div>
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
          Today's Workspace
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Good morning, {name}
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your shift, visits, and participant activities.
        </p>
      </div>


      {/* Shift Information */}

      <div className="flex flex-wrap items-center gap-3">

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <CalendarDays
            size={18}
            className="text-emerald-600"
          />

          <span className="text-sm font-medium text-slate-600">
            {date}
          </span>
        </div>


        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Clock3
            size={18}
            className="text-emerald-600"
          />

          <span className="text-sm font-medium text-slate-600">
            {shiftTime}
          </span>
        </div>


        <Badge
          variant={isActive ? "success" : "neutral"}
          size="lg"
        >
          {isActive ? "Shift Active" : "Shift Ended"}
        </Badge>

      </div>

    </motion.section>
  );
}