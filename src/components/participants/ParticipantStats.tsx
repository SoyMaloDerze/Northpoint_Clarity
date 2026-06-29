import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Clock3,
  Users,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import Card from "../ui/Card";

import {
  cardHover,
  smoothTransition,
} from "../../lib/motion";

type ParticipantStat = {
  label: string;
  value: number | string;
  icon: LucideIcon;
  iconClassName: string;
  backgroundClassName: string;
};

const stats: ParticipantStat[] = [
  {
    label: "Participants",
    value: 128,
    icon: Users,
    iconClassName: "text-sky-600",
    backgroundClassName: "bg-sky-50",
  },
  {
    label: "Active",
    value: 112,
    icon: UserCheck,
    iconClassName: "text-emerald-600",
    backgroundClassName: "bg-emerald-50",
  },
  {
    label: "Reviews Due",
    value: 18,
    icon: Clock3,
    iconClassName: "text-amber-600",
    backgroundClassName: "bg-amber-50",
  },
  {
    label: "High Risk",
    value: 7,
    icon: AlertTriangle,
    iconClassName: "text-red-600",
    backgroundClassName: "bg-red-50",
  },
];

export default function ParticipantStats() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ...smoothTransition,
              delay: index * 0.04,
            }}
            whileHover={cardHover}
          >
            <Card className="rounded-3xl border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </h2>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.backgroundClassName}`}
                >
                  <Icon
                    size={22}
                    className={stat.iconClassName}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </section>
  );
}