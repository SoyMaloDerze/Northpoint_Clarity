import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  UserRound,
} from "lucide-react";

import Badge from "../ui/Badge";
import Card from "../ui/Card";

import {
  arrowHover,
  cardHover,
  smoothTransition,
} from "../../lib/motion";

type ReviewCardProps = {
  title: string;

  participant: string;

  date: string;

  reviewType: string;

  urgent?: boolean;

  onOpen?: () => void;
};

export default function ReviewCard({
  title,
  participant,
  date,
  reviewType,
  urgent = false,
  onOpen,
}: ReviewCardProps) {
  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
      className="h-full"
    >
      <Card className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200 p-6 transition-all duration-300 hover:border-emerald-300">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <Badge
            variant={urgent ? "danger" : "neutral"}
            pill={false}
          >
            {urgent ? "URGENT" : reviewType.toUpperCase()}
          </Badge>

          <motion.button
            type="button"
            whileHover={arrowHover}
            transition={smoothTransition}
            onClick={onOpen}
            className="rounded-xl bg-slate-100 p-2 text-slate-500 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white"
          >
            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </motion.button>
        </div>

        {/* Title */}

        <div className="mt-6">
          <h3 className="text-xl font-bold leading-tight text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {reviewType}
          </p>
        </div>

        {/* Participant */}

        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
            <UserRound
              size={18}
              className="text-slate-600"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Participant
            </p>

            <p className="font-semibold text-slate-900">
              {participant}
            </p>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-auto pt-8">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CalendarDays size={16} />

            {date}
          </div>

          <button
            type="button"
            onClick={onOpen}
            className="mt-5 text-sm font-semibold text-emerald-600 transition-colors duration-300 hover:text-emerald-700"
          >
            Open Review →
          </button>
        </div>
      </Card>
    </motion.div>
  );
}