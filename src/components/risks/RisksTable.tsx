import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarClock,
  ShieldAlert,
} from "lucide-react";

import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  listItemHover,
  smoothTransition,
} from "../../lib/motion";

import type { Risk } from "../../types/risk";

type RiskTableItem = {
  risk: Risk;
  participantName: string;
};

type RisksTableProps = {
  risks: RiskTableItem[];

  onOpenRisk?: (
    risk: Risk,
  ) => void;
};

export default function RisksTable({
  risks,
  onOpenRisk,
}: RisksTableProps) {
  return (
    <Card className="hidden overflow-hidden rounded-4xl border-slate-200 md:block">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-slate-50">
            <tr className="border-b border-slate-200">
              <TableHeading>
                Risk
              </TableHeading>

              <TableHeading>
                Participant
              </TableHeading>

              <TableHeading>
                Category
              </TableHeading>

              <TableHeading>
                Review
              </TableHeading>

              <TableHeading>
                Status
              </TableHeading>

              <TableHeading align="right">
                Action
              </TableHeading>
            </tr>
          </thead>

          <tbody>
            {risks.map(
              ({
                risk,
                participantName,
              }) => (
                <motion.tr
                  key={risk.id}
                  whileHover={
                    listItemHover
                  }
                  transition={
                    smoothTransition
                  }
                  className="border-b border-slate-100 transition-colors duration-300 hover:bg-slate-50"
                >
                  {/* Risk */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${getLevelIcon(
                          risk.level,
                        )}`}
                      >
                        <ShieldAlert
                          size={18}
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          {
                            risk.title
                          }
                        </p>

                        <Badge
                          variant={getLevelBadge(
                            risk.level,
                          )}
                        >
                          {risk.level}
                        </Badge>
                      </div>
                    </div>
                  </td>

                  {/* Participant */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Avatar
                        name={
                          participantName
                        }
                        size="sm"
                      />

                      <span className="font-medium text-slate-700">
                        {
                          participantName
                        }
                      </span>
                    </div>
                  </td>

                  {/* Category */}

                  <td className="px-6 py-5">
                    <span className="capitalize text-slate-700">
                      {
                        risk.category
                      }
                    </span>
                  </td>

                  {/* Review */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-slate-600">
                      <CalendarClock
                        size={16}
                      />

                      <span className="text-sm">
                        {
                          risk.reviewDate
                        }
                      </span>
                    </div>
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
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
                  </td>

                  {/* Action */}

                  <td className="px-6 py-5 text-right">
                    <Button
                      title="Open Risk"
                      size="sm"
                      variant="secondary"
                      rightIcon={
                        <ArrowUpRight
                          size={15}
                        />
                      }
                      onClick={() =>
                        onOpenRisk?.(
                          risk,
                        )
                      }
                    >
                      Open
                    </Button>
                  </td>
                </motion.tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function TableHeading({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      className={`px-6 py-5 text-${align} text-xs font-semibold uppercase tracking-[0.14em] text-slate-500`}
    >
      {children}
    </th>
  );
}

function getLevelBadge(
  level: Risk["level"],
):
  | "success"
  | "warning"
  | "danger"
  | "neutral" {
  switch (level) {
    case "critical":
    case "high":
      return "danger";

    case "medium":
      return "warning";

    default:
      return "success";
  }
}

function getLevelIcon(
  level: Risk["level"],
) {
  switch (level) {
    case "critical":
      return "bg-red-100 text-red-600";

    case "high":
      return "bg-orange-100 text-orange-600";

    case "medium":
      return "bg-amber-100 text-amber-600";

    default:
      return "bg-emerald-100 text-emerald-600";
  }
}