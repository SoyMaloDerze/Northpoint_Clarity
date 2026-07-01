import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Minus,
} from "lucide-react";

import Card from "../ui/Card";

import AnimatedCounter from "./AnimatedCounter";

import {
  cardHover,
  smoothTransition,
} from "../../lib/motion";

type MetricCardProps = {
  title: string;

  value: number;

  suffix?: string;

  prefix?: string;

  decimals?: number;

  trend: number;

  trendLabel: string;

  delay?: number;

  icon: React.ElementType;
};

export default function MetricCard({
  title,
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  trend,
  trendLabel,
  delay = 0,
  icon: Icon,
}: MetricCardProps) {
  const isPositive =
    trend > 0;

  const isNegative =
    trend < 0;

  const TrendIcon =
    isPositive
      ? ArrowUpRight
      : isNegative
        ? ArrowDownRight
        : Minus;

  const trendClasses =
    isPositive
      ? "bg-emerald-50 text-emerald-700"
      : isNegative
        ? "bg-red-50 text-red-700"
        : "bg-slate-100 text-slate-600";

  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
    >
      <Card className="group relative overflow-hidden rounded-4xl border-slate-200 p-6">

        {/* Ambient Glow */}

        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-slate-100 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative">

          {/* Top */}

          <div className="flex items-start justify-between">

            <div>

              <p className="text-sm font-medium text-slate-500">
                {title}
              </p>

              <div className="mt-5">

                <AnimatedCounter
                  value={value}
                  duration={1400}
                  delay={delay}
                  decimals={decimals}
                  prefix={prefix}
                  suffix={suffix}
                  className="text-5xl font-black tracking-tight text-slate-900"
                />

              </div>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600">

              <Icon
                size={24}
                aria-hidden="true"
              />

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-8 flex items-center justify-between">

            <div
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold ${trendClasses}`}
            >

              <TrendIcon
                size={16}
              />

              {Math.abs(
                trend,
              )}
              %

            </div>

            <span className="text-sm text-slate-500">
              {trendLabel}
            </span>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}