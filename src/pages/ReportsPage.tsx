import { useState } from "react";
import { motion } from "framer-motion";

import ReportsHeader from "../components/reports/ReportsHeader";
import ReportStats from "../components/reports/ReportStats";
import ReportToolbar from "../components/reports/ReportToolbar";
import ReportList from "../components/reports/ReportList";
import ReportsTable from "../components/reports/ReportsTable";
import ReportDrawer from "../components/reports/ReportDrawer";

import { reports } from "../mock/reports";

import type { Report } from "../types/report";

import {
  pageVariants,
  smoothTransition,
} from "../lib/motion";

type ViewMode =
  | "list"
  | "table";

export default function ReportsPage() {
  const [search, setSearch] = useState("");

  const [mood, setMood] = useState("all");

  const [type, setType] = useState("all");

  const [view, setView] = useState<ViewMode>("list");

  const [selectedReport, setSelectedReport] = useState<Report | null>(null);

  function handleOpenReport(
    report: Report,
  ) {
    setSelectedReport(report);
  }

  function handleCloseReport() {
    setSelectedReport(null);
  }

  function handleCreateReport() {
    console.log("Create Report");
  }

  // Temporary filtering.
  // Will move to API queries.

  const visibleReports =
    reports.filter((report) => {
      const matchesSearch =
        report.summary
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        report.recommendation
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesMood = mood === "all" || report.mood === mood;

      const matchesType =
        type === "all";

      return (
        matchesSearch &&
        matchesMood &&
        matchesType
      );
    });

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={smoothTransition}
      className="space-y-8"
    >
      <ReportsHeader
        onAction={handleCreateReport}
      />

      <ReportStats />

      <ReportToolbar
        search={search}
        onSearchChange={setSearch}
        mood={mood}
        onStatusChange={setMood}
        type={type}
        onTypeChange={setType}
        view={view}
        onViewChange={setView}
      />

      {view === "list" ? (
        <ReportList
          reports={visibleReports}
          onOpenReport={
            handleOpenReport
          }
        />
      ) : (
        <ReportsTable
          reports={visibleReports}
          onOpenReport={
            handleOpenReport
          }
        />
      )}

      {/* Build next */}

      {selectedReport && (
        <>
          {/* ReportDrawer */}

          
          <ReportDrawer
            report={selectedReport}
            open={!!selectedReport}
            onClose={handleCloseReport}
          />
         
        </>
      )}
    </motion.section>
  );
}