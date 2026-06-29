import { motion } from "framer-motion";

import EmptyReports from "./EmptyReports";
import ReportCard from "./ReportCard";

import {
  staggerContainer,
  staggerItem,
} from "../../lib/motion";

import type { Report } from "../../types/report";

type ReportListProps = {
  reports: Report[];

  onOpenReport?: (
    report: Report,
  ) => void;
};

export default function ReportList({
  reports,
  onOpenReport,
}: ReportListProps) {
  if (reports.length === 0) {
    return <EmptyReports />;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid gap-5 lg:grid-cols-2"
    >
      {reports.map((report) => (
        <motion.div
          key={report.id}
          variants={staggerItem}
          className="mx-auto w-full max-w-86.25 sm:max-w-none"
        >
          <ReportCard
            report={report}
            onOpen={onOpenReport}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}