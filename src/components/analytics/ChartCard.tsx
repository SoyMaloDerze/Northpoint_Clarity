import { motion } from "framer-motion";
import {
  ChevronRight,
} from "lucide-react";

import Card from "../ui/Card";

import {
  cardHover,
  smoothTransition,
} from "../../lib/motion";

type ChartCardProps = {
  title: string;

  subtitle: string;

  active: boolean;

  onSelect: () => void;

  children: React.ReactNode;
};

export default function ChartCard({
  title,
  subtitle,
  active,
  onSelect,
  children,
}: ChartCardProps) {
  return (
    <motion.div
      layout
      whileHover={cardHover}
      transition={smoothTransition}
    >
      <Card
        onClick={onSelect}
        className={`group cursor-pointer overflow-hidden rounded-4xl border p-7 transition-all duration-500 ${
          active
            ? "border-indigo-200 ring-4 ring-indigo-100 shadow-xl"
            : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <div className="flex items-start justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Analytics
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {title}
            </h3>

            <p className="mt-3 max-w-md leading-7 text-slate-500">
              {subtitle}
            </p>

          </div>

          <motion.div
            animate={{
              x: active
                ? 6
                : 0,
            }}
            transition={{
              duration: .25,
            }}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${
              active
                ? "bg-indigo-100 text-indigo-700"
                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
            }`}
          >
            <ChevronRight
              size={20}
            />
          </motion.div>

        </div>

        {/* Chart */}

        <motion.div
          layout
          animate={{
            opacity: active
              ? 1
              : .75,
            scale: active
              ? 1
              : .985,
          }}
          transition={{
            duration: .35,
          }}
          className="mt-8"
        >
          {children}
        </motion.div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">

          <span className="text-sm text-slate-500">
            Click to focus analysis
          </span>

          <motion.div
            animate={{
              opacity: active
                ? 1
                : .45,
            }}
          >
            <span className="rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700">
              {active
                ? "Focused"
                : "Available"}
            </span>
          </motion.div>

        </div>

      </Card>
    </motion.div>
  );
}