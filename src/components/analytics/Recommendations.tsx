import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  CalendarClock,
  ClipboardCheck,
  ShieldAlert,
  UserRoundCheck,
} from "lucide-react";

import Card from "../ui/Card";

import {
//   smoothTransition,
  staggerContainer,
  staggerItem,
} from "../../lib/motion";

type Recommendation = {
  id: string;

  title: string;

  description: string;

  priority:
    | "High"
    | "Medium"
    | "Low";

  icon: React.ElementType;
};

const recommendations: Recommendation[] =
  [
    {
      id: "1",
      title:
        "Review medication compliance",
      description:
        "Three participants require medication reviews before the next reporting cycle.",
      priority: "High",
      icon: ShieldAlert,
    },
    {
      id: "2",
      title:
        "Schedule wellbeing follow-up",
      description:
        "Participant engagement has declined over the last seven days.",
      priority: "Medium",
      icon: UserRoundCheck,
    },
    {
      id: "3",
      title:
        "Complete outstanding reports",
      description:
        "Four shift reports remain pending from yesterday.",
      priority: "Medium",
      icon: ClipboardCheck,
    },
    {
      id: "4",
      title:
        "Prepare monthly review",
      description:
        "Operational metrics indicate the organisation is ready for the monthly performance review.",
      priority: "Low",
      icon: CalendarClock,
    },
  ];

export default function Recommendations() {
  return (
    <section className="space-y-8">
      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">

          <BrainCircuit
            size={24}
            className="text-indigo-600"
          />

        </div>

        <div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            AI Recommendations
          </h2>

          <p className="mt-2 max-w-3xl leading-7 text-slate-500">
            Suggested next actions generated from current
            operational performance, participant wellbeing,
            reporting activity and organisational trends.
          </p>

        </div>

      </div>

      {/* Cards */}

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {recommendations.map(
          (item) => {
            const Icon =
              item.icon;

            const priorityClass =
              item.priority ===
              "High"
                ? "bg-red-50 text-red-700"
                : item.priority ===
                    "Medium"
                  ? "bg-amber-50 text-amber-700"
                  : "bg-emerald-50 text-emerald-700";

            return (
              <motion.div
                key={item.id}
                variants={
                  staggerItem
                }
              >
                <Card className="group rounded-4xl border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                  <div className="flex items-start justify-between gap-6">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600">

                      <Icon
                        size={24}
                      />

                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] ${priorityClass}`}
                    >
                      {item.priority}
                    </span>

                  </div>

                  <h3 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-indigo-600 transition hover:gap-4"
                  >
                    View Recommendation

                    <ArrowRight
                      size={16}
                    />
                  </button>

                </Card>
              </motion.div>
            );
          },
        )}
      </motion.div>
    </section>
  );
}