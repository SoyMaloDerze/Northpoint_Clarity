import { motion } from "framer-motion";
import { FileSearch, Plus } from "lucide-react";

import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  buttonHover,
  buttonTap,
  smoothTransition,
} from "../../lib/motion";

type EmptyReportsProps = {
  onCreate?: () => void;
};

export default function EmptyReports({
  onCreate,
}: EmptyReportsProps) {
  return (
    <Card className="rounded-4xl border-slate-200 px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        {/* Icon */}

        <div className="flex h-20 w-20 items-center justify-center rounded-4xl bg-emerald-50 text-emerald-600">
          <FileSearch
            size={38}
            aria-hidden="true"
          />
        </div>

        {/* Content */}

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
          No reports found
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
          We couldn't find any reports matching your current
          search or filters. Try adjusting your filters or
          create a new report to get started.
        </p>

        {/* Action */}

        <motion.div
          whileHover={buttonHover}
          whileTap={buttonTap}
          transition={smoothTransition}
          className="mt-8"
        >
          <Button
            title="Create Report"
            leftIcon={
              <Plus
                size={18}
                aria-hidden="true"
              />
            }
            onClick={onCreate}
          >
            Create Report
          </Button>
        </motion.div>
      </div>
    </Card>
  );
}