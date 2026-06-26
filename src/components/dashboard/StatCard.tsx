import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

import Card from "../ui/Card";

import {
  cardHover,
  smoothTransition,
} from "../../lib/motion";
import { cn } from "../../utils/cn";

import {
  DASHBOARD_COLORS,
  type DashboardColor,
} from "../../constants/dashboard";

type Trend = "up" | "down" | "neutral";

type StatCardProps = {
  title: string;
  value: number | string;

  icon: LucideIcon;

  trend?: Trend;
  trendValue?: string;

  subtitle: string;
  color?: DashboardColor;

};

export default function StatCard({
  title,
  value,
  icon: Icon,
  trend = "neutral",
  trendValue,
  subtitle,
  color = "emerald",
}: StatCardProps) {
  const TrendIcon = trend === "up"
      ? ArrowUpRight
      : ArrowDownRight;

  const palette = DASHBOARD_COLORS[color];

  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
    >
      <Card className="h-full rounded-4xl border-slate-200 p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "flex h-14 w-14 items-center justify-center rounded-2xl",
              palette.background,
            )}
          >
            <Icon
              size={24}
              className={palette.icon}
              aria-hidden="true"
            />
          </div>

          {trend !== "neutral" && trendValue && (
            <div
              className={cn(
                "flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
                trend === "up"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-700",
              )}
            >
              <TrendIcon
                size={14}
                aria-hidden="true"
              />

              {trendValue}
            </div>
          )}
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {subtitle}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}