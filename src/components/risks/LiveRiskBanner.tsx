import { motion } from "framer-motion";
import {
  Activity,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

import Card from "../ui/Card";

import {
  smoothTransition,
  pulseAnimation,
} from "../../lib/motion";

export default function LiveRiskBanner() {
  return (
    <Card className="relative overflow-hidden rounded-4xl border border-red-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Ambient Glow */}

      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-100/40 blur-3xl" />

      <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="flex items-center gap-3">

            <motion.div
              animate={pulseAnimation}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-3 w-3 rounded-full bg-emerald-500"
            />

            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
              Live Monitoring
            </span>

          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
            Operational Risk Status
          </h2>

          <p className="mt-3 max-w-xl leading-7 text-slate-600">
            Monitoring participant wellbeing, incident reports,
            compliance alerts and operational safety across your
            organisation in real time.
          </p>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-4 lg:w-90">

          <StatusCard
            icon={Activity}
            label="Participants"
            value="148"
            color="emerald"
          />

          <StatusCard
            icon={ShieldAlert}
            label="Active Risks"
            value="8"
            color="amber"
          />

          <StatusCard
            icon={TriangleAlert}
            label="Critical"
            value="2"
            color="red"
          />

          <StatusCard
            icon={Activity}
            label="Updated"
            value="Just now"
            color="slate"
          />

        </div>

      </div>
    </Card>
  );
}

type StatusCardProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  color:
    | "emerald"
    | "amber"
    | "red"
    | "slate";
};

function StatusCard({
  icon: Icon,
  label,
  value,
  color,
}: StatusCardProps) {
  const styles = {
    emerald:
      "bg-emerald-50 text-emerald-700",

    amber:
      "bg-amber-50 text-amber-700",

    red:
      "bg-red-50 text-red-700",

    slate:
      "bg-slate-100 text-slate-700",
  };

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={smoothTransition}
      className="rounded-3xl border border-slate-200 bg-white p-5"
    >
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${styles[color]}`}
      >
        <Icon
          size={20}
          aria-hidden="true"
        />
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
        {value}
      </h3>
    </motion.div>
  );
}