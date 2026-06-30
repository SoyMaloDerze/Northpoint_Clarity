import { motion } from "framer-motion";
import {
  Flag,
  Plus,
} from "lucide-react";

import Button from "../ui/Button";
import Card from "../ui/Card";

import {
  buttonHover,
  buttonTap,
  smoothTransition,
} from "../../lib/motion";

type EmptyGoalsProps = {
  onCreate?: () => void;
};

export default function EmptyGoals({
  onCreate,
}: EmptyGoalsProps) {
  return (
    <Card className="rounded-4xl border-slate-200 px-6 py-14 sm:px-10">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">
        {/* Icon */}

        <div className="flex h-20 w-20 items-center justify-center rounded-4xl bg-emerald-50 text-emerald-600">
          <Flag
            size={38}
            aria-hidden="true"
          />
        </div>

        {/* Content */}

        <h2 className="mt-8 text-2xl font-bold tracking-tight text-slate-900">
          No goals found
        </h2>

        <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
          No participant goals match your current search or
          filters. Try adjusting your filters or create a new
          goal to begin tracking participant progress.
        </p>

        {/* Action */}

        <motion.div
          whileHover={buttonHover}
          whileTap={buttonTap}
          transition={smoothTransition}
          className="mt-8"
        >
          <Button
            title="Create Goal"
            leftIcon={
              <Plus
                size={18}
                aria-hidden="true"
              />
            }
            onClick={onCreate}
          >
            Create Goal
          </Button>
        </motion.div>
      </div>
    </Card>
  );
}