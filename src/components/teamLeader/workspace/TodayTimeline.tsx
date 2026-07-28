import { motion } from "framer-motion";

import TimelineItem from "./TimelineItem";

import type {
  TimelineEvent,
} from "../../../types/workspace";

import {
  staggerContainer,
} from "../../../lib/motion";


type TodayTimelineProps = {
  events: TimelineEvent[];
  onOpen?: (event: TimelineEvent) => void;
};


export default function TodayTimeline({
  events, onOpen,
}: TodayTimelineProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
          Today's Journey
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Shift Timeline
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Follow your activities and complete tasks throughout your shift.
        </p>
      </div>


      {/* Timeline */}

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative space-y-6"
      >

        {/* Vertical Line */}

        <div className="absolute left-4.75 top-5 h-[calc(100%-40px)] w-px bg-slate-200" />


        {events.map((event) => (
          <TimelineItem
            key={event.id}
            event={event}
            onOpen={onOpen}
          />
        ))}

      </motion.div>

    </section>
  );
}