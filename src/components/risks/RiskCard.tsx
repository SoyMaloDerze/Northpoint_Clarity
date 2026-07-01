import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarClock,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  cardHover,
  cardTap,
  smoothTransition,
} from "../../lib/motion";

import type { Risk } from "../../types/risk";

type RiskCardProps = {
  risk: Risk;

  participantName: string;

  onOpen?: (
    risk: Risk,
  ) => void;
};

export default function RiskCard({
  risk,
  participantName,
  onOpen,
}: RiskCardProps) {
  const level = getLevelStyles(
    risk.level,
  );

  return (
    <motion.div
      whileHover={cardHover}
      whileTap={cardTap}
      transition={smoothTransition}
      className="mx-auto w-full"
    >
      <Card className="overflow-hidden rounded-4xl border-slate-200 p-0 shadow-sm">

        {/* Severity Banner */}

        <div
          className={`flex items-center justify-between border-b px-6 py-4 ${level.banner}`}
        >
          <div className="flex items-center gap-3">

            <motion.div
              animate={
                risk.level ===
                "critical"
                  ? {
                      scale: [
                        1,
                        1.15,
                        1,
                      ],
                      opacity: [
                        1,
                        0.6,
                        1,
                      ],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <TriangleAlert
                size={18}
              />
            </motion.div>

            <span className="text-sm font-bold uppercase tracking-[0.14em]">
              {risk.level} Risk
            </span>

          </div>

          <Badge
            variant={
              risk.status ===
              "resolved"
                ? "success"
                : risk.status ===
                    "monitoring"
                  ? "warning"
                  : "danger"
            }
          >
            {risk.status}
          </Badge>

        </div>

        <div className="p-6">

          {/* Header */}

          <div className="flex items-start justify-between gap-5">

            <div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                {risk.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {risk.description}
              </p>

            </div>

            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${level.icon}`}
            >
              <ShieldAlert
                size={24}
              />
            </div>

          </div>

          {/* Participant */}

          <div className="mt-8 flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4">

            <Avatar
              name={participantName}
              size="md"
            />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Participant
              </p>

              <h4 className="mt-1 font-semibold text-slate-900">
                {participantName}
              </h4>
            </div>

          </div>

          {/* Details */}

          <div className="mt-7 grid gap-5 sm:grid-cols-2">

            <InfoItem
              label="Category"
              value={risk.category}
            />

            <InfoItem
              label="Assigned To"
              value={risk.assignedTo}
            />

            <InfoItem
              label="Identified"
              value={
                risk.identifiedAt
              }
            />

            <InfoItem
              label="Review Date"
              value={
                risk.reviewDate
              }
            />

          </div>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-5">

            <div className="flex items-center gap-2 text-sm text-slate-500">

              <CalendarClock
                size={16}
              />

              Review Scheduled

            </div>

            <Button
              title="Open Risk"
              variant="secondary"
              rightIcon={
                <ArrowUpRight
                  size={16}
                />
              }
              onClick={() =>
                onOpen?.(risk)
              }
              className="text-nowrap"
            >
              Open Risk
            </Button>

          </div>

        </div>

      </Card>
    </motion.div>
  );
}

function InfoItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-900 capitalize">
        {value}
      </p>
    </div>
  );
}

function getLevelStyles(
  level: Risk["level"],
) {
  switch (level) {
    case "critical":
      return {
        banner:
          "bg-red-50 border-red-200 text-red-700",
        icon:
          "bg-red-100 text-red-600",
      };

    case "high":
      return {
        banner:
          "bg-orange-50 border-orange-200 text-orange-700",
        icon:
          "bg-orange-100 text-orange-600",
      };

    case "medium":
      return {
        banner:
          "bg-amber-50 border-amber-200 text-amber-700",
        icon:
          "bg-amber-100 text-amber-600",
      };

    default:
      return {
        banner:
          "bg-emerald-50 border-emerald-200 text-emerald-700",
        icon:
          "bg-emerald-100 text-emerald-600",
      };
  }
}