import { motion } from "framer-motion";
import {
  AlertCircle,
  Check,
  Clock3,
  FileText,
  HeartPulse,
  Target,
  Users,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import type {
  TimelineEvent,
} from "../../../types/workspace";

import {
  staggerItem,
  smoothTransition,
} from "../../../lib/motion";

import { cn } from "../../../utils/cn";


type TimelineItemProps = {
  event: TimelineEvent;
  onOpen?: (event: TimelineEvent) => void;
};


const icons: Record<
  TimelineEvent["type"],
  LucideIcon
> = {
  visit: Users,
  report: FileText,
  medication: HeartPulse,
  goal: Target,
  note: FileText,
};


const statusStyles = {
  completed: {
    icon:
      "bg-emerald-100 text-emerald-600",
    dot:
      "bg-emerald-500",
  },

  active: {
    icon:
      "bg-blue-100 text-blue-600",
    dot:
      "bg-blue-500",
  },

  upcoming: {
    icon:
      "bg-slate-100 text-slate-500",
    dot:
      "bg-slate-300",
  },

  attention: {
    icon:
      "bg-amber-100 text-amber-600",
    dot:
      "bg-amber-500",
  },
} as const;


export default function TimelineItem({
  event, onOpen
}: TimelineItemProps) {
  const Icon = icons[event.type];

  const styles =
    statusStyles[event.status];

  return (
    <motion.button
      variants={staggerItem}
      whileHover={{
        x: 3,
      }}
      transition={smoothTransition}
      type="button"
      onClick={() => onOpen?.(event)}
      className="group relative flex w-full items-start gap-5 text-left"
    >

      {/* Timeline Node */}

      <div className="relative z-10">

        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full",
            styles.icon,
          )}
        >
          {event.status === "completed" ? (
            <Check size={18} />
          ) : event.status === "attention" ? (
            <AlertCircle size={18} />
          ) : (
            <Icon size={18} />
          )}
        </div>

      </div>



      {/* Content */}

      <div className="flex flex-1 flex-col rounded-2xl border border-transparent p-3 transition-all duration-300 group-hover:border-slate-200 group-hover:bg-slate-50">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <h3 className="font-semibold text-slate-900">
            {event.title}
          </h3>


          <div className="flex items-center gap-1.5 text-sm text-slate-400">

            <Clock3 size={14} />

            {event.time}

          </div>

        </div>


        <p className="mt-2 text-sm leading-6 text-slate-500">
          {event.description}
        </p>


        {event.status === "active" && (
          <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600">

            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />

            In progress

          </div>
        )}


        {event.status === "attention" && (
          <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-amber-600">
            Needs attention
          </div>
        )}

      </div>

    </motion.button>
  );
}