import { LayoutList, Table2 } from "lucide-react";

import Card from "../ui/Card";

import ParticipantFilters from "./ParticipantFilters";
import ParticipantSearch from "./ParticipantSearch";

type ViewMode =
  | "list"
  | "table";

type ParticipantToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  risk: string;
  onRiskChange: (value: string) => void;

  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

const STATUS_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];

const RISK_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Low",
    value: "low",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "High",
    value: "high",
  },
];

export default function ParticipantToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  risk,
  onRiskChange,
  view,
  onViewChange,
}: ParticipantToolbarProps) {
  return (
    <Card className="rounded-4xl border-slate-200 p-5 sm:p-6">
      <div className="space-y-6">

        {/* Search */}

        <ParticipantSearch
          value={search}
          onChange={onSearchChange}
        />

        {/* Controls */}

        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">

          {/* Filters */}

          <div className="flex flex-col gap-6 lg:flex-row">
            <ParticipantFilters
              label="Status"
              options={STATUS_OPTIONS}
              value={status}
              onChange={onStatusChange}
            />

            <ParticipantFilters
              label="Risk"
              options={RISK_OPTIONS}
              value={risk}
              onChange={onRiskChange}
            />
          </div>

          {/* View */}

          <div className="flex items-center justify-between gap-4">

            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              View
            </p>

            <div className="inline-flex rounded-2xl border border-slate-200 bg-slate-100 p-1">

              <button
                type="button"
                onClick={() =>
                  onViewChange("list")
                }
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  view === "list"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <LayoutList size={16} />

                List
              </button>

              <button
                type="button"
                onClick={() =>
                  onViewChange("table")
                }
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  view === "table"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <Table2 size={16} />

                Table
              </button>

            </div>

          </div>

        </div>

      </div>
    </Card>
  );
}