import {
  LayoutList,
  Table2,
} from "lucide-react";

import Card from "../ui/Card";

import RiskFilters from "./RiskFilters";
import RiskSearch from "./RiskSearch";

type ViewMode =
  | "list"
  | "table";

type RiskToolbarProps = {
  search: string;
  onSearchChange: (
    value: string,
  ) => void;

  severity: string;
  onSeverityChange: (
    value: string,
  ) => void;

  status: string;
  onStatusChange: (
    value: string,
  ) => void;

  view: ViewMode;
  onViewChange: (
    view: ViewMode,
  ) => void;
};

const SEVERITY_OPTIONS = [
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
  {
    label: "Critical",
    value: "critical",
  },
];

const STATUS_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Open",
    value: "open",
  },
  {
    label: "Monitoring",
    value: "monitoring",
  },
  {
    label: "Resolved",
    value: "resolved",
  },
];

export default function RiskToolbar({
  search,
  onSearchChange,
  severity,
  onSeverityChange,
  status,
  onStatusChange,
  view,
  onViewChange,
}: RiskToolbarProps) {
  return (
    <Card className="rounded-4xl border-slate-200 p-5 sm:p-6">
      <div className="space-y-6">

        {/* Search */}

        <RiskSearch
          value={search}
          onChange={onSearchChange}
        />

        {/* Controls */}

        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">

          {/* Filters */}

          <div className="flex flex-col gap-6 lg:flex-row">
            <RiskFilters
              label="Severity"
              options={SEVERITY_OPTIONS}
              value={severity}
              onChange={onSeverityChange}
            />

            <RiskFilters
              label="Status"
              options={STATUS_OPTIONS}
              value={status}
              onChange={onStatusChange}
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