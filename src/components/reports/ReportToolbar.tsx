import { LayoutList, Table2 } from "lucide-react";

import Card from "../ui/Card";

import ReportFilters from "./ReportFilters";
import ReportSearch from "./ReportSearch";

type ViewMode =
  | "list"
  | "table";

type ReportToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;

  mood: string;
  onStatusChange: (value: string) => void;

  type: string;
  onTypeChange: (value: string) => void;

  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

const MOOD_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Positive",
    value: "positive",
  },
  {
    label: "Neutral",
    value: "neutral",
  },
  {
    label: "Concerning",
    value: "concerning",
  },
];

const TYPE_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Shift Report",
    value: "shift",
  },
  {
    label: "Incident",
    value: "incident",
  },
  {
    label: "Progress Note",
    value: "progress",
  },
  {
    label: "Medication",
    value: "medication",
  },
];

export default function ReportToolbar({
  search,
  onSearchChange,
  mood,
  onStatusChange,
  type,
  onTypeChange,
  view,
  onViewChange,
}: ReportToolbarProps) {
  return (
    <Card className="rounded-4xl border-slate-200 p-5 sm:p-6">
      <div className="space-y-6">
        {/* Search */}

        <ReportSearch
          value={search}
          onChange={onSearchChange}
        />

        {/* Controls */}

        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          {/* Filters */}

          <div className="flex flex-col gap-6 lg:flex-row">
            <ReportFilters
              label="Mood"
              value={mood}
              options={MOOD_OPTIONS}
              onChange={onStatusChange}
            />

            <ReportFilters
              label="Report Type"
              value={type}
              options={TYPE_OPTIONS}
              onChange={onTypeChange}
            />
          </div>

          {/* View */}

          <div className="hidden md:flex items-center justify-between gap-4">
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