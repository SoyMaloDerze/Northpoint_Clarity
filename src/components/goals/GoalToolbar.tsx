import { LayoutList, Table2 } from "lucide-react";

import Card from "../ui/Card";

import GoalFilters from "./GoalFilters";
import GoalSearch from "./GoalSearch";

type ViewMode =
  | "list"
  | "table";

type GoalToolbarProps = {
  search: string;
  onSearchChange: (value: string) => void;

  status: string;
  onStatusChange: (value: string) => void;

  category: string;
  onCategoryChange: (value: string) => void;

  view: ViewMode;
  onViewChange: (view: ViewMode) => void;
};

const STATUS_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Not Started",
    value: "not-started",
  },
  {
    label: "In Progress",
    value: "in-progress",
  },
  {
    label: "Completed",
    value: "completed",
  },
];

const CATEGORY_OPTIONS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Community",
    value: "community",
  },
  {
    label: "Health",
    value: "health",
  },
  {
    label: "Living",
    value: "living",
  },
  {
    label: "Communication",
    value: "communication",
  },
  {
    label: "Transport",
    value: "transport",
  },
  {
    label: "Wellbeing",
    value: "wellbeing",
  },
];

export default function GoalToolbar({
  search,
  onSearchChange,
  status,
  onStatusChange,
  category,
  onCategoryChange,
  view,
  onViewChange,
}: GoalToolbarProps) {
  return (
    <Card className="rounded-4xl border-slate-200 p-5 sm:p-6">
      <div className="space-y-6">
        {/* Search */}

        <GoalSearch
          value={search}
          onChange={onSearchChange}
        />

        {/* Controls */}

        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          {/* Filters */}

          <div className="flex flex-col gap-6 lg:flex-row">
            <GoalFilters
              label="Status"
              value={status}
              options={STATUS_OPTIONS}
              onChange={onStatusChange}
            />

            <GoalFilters
              label="Category"
              value={category}
              options={CATEGORY_OPTIONS}
              onChange={onCategoryChange}
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