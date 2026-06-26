import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  arrowHover,
  buttonTap,
  cardHover,
  smoothTransition,
} from "../../lib/motion";

type NextPriorityCardProps = {
  title: string;
  participant: string;

  reviewType: string;

  date: string;
  time: string;

  countdown: string;

  onOpen?: () => void;
};

export default function NextPriorityCard({
  title,
  participant,
  reviewType,
  date,
  time,
  countdown,
  onOpen,
}: NextPriorityCardProps) {
  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden rounded-4xl border border-slate-200 bg-linear-to-br from-white via-white to-emerald-50 p-8">
        {/* Ambient Glow */}

        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

        {/* Header */}

        <div className="relative z-10 flex items-start justify-between">
          <div>
            <Badge
              variant="primary"
              pill={false}
            >
              NEXT PRIORITY
            </Badge>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
              {title}
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600">
              {reviewType}
            </p>
          </div>

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.55)]"
          />
        </div>

        {/* Participant */}

        <div className="relative z-10 mt-10 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
            <UserRound
              size={24}
              className="text-emerald-700"
            />
          </div>

          <div>
            <p className="text-sm text-slate-500">
              Participant
            </p>

            <h3 className="text-lg font-bold text-slate-900">
              {participant}
            </h3>
          </div>
        </div>

        {/* Schedule */}

        <div className="relative z-10 mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-slate-500">
              <CalendarDays size={17} />

              <span className="text-xs font-semibold uppercase tracking-wider">
                Scheduled
              </span>
            </div>

            <p className="font-semibold text-slate-900">
              {date}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {time}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="mb-3 flex items-center gap-2 text-emerald-700">
              <Clock3 size={17} />

              <span className="text-xs font-semibold uppercase tracking-wider">
                Starts In
              </span>
            </div>

            <h3 className="text-2xl font-black text-emerald-700">
              {countdown}
            </h3>
          </div>
        </div>

        {/* Insight */}

        <div className="relative z-10 mt-8 rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur">
          <p className="text-sm leading-7 text-slate-600">
            This review has been identified as your highest
            operational priority. Completing it on time helps
            maintain participant wellbeing and keeps support
            plans up to date.
          </p>
        </div>

        {/* Footer */}

        <div className="relative z-10 mt-8 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Operational Agenda
          </p>

          <Button
            title="Open Review"
            size="lg"
            onClick={onOpen}
            rightIcon={
              <motion.div
                whileHover={arrowHover}
                whileTap={buttonTap}
                transition={smoothTransition}
              >
                <ArrowRight size={18} />
              </motion.div>
            }
          >
            Open Review
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}