import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Card from "../ui/Card";
import Button from "../ui/Button";

import {
  smoothTransition,
  scaleVariants,
  buttonHover,
  buttonTap,
} from "../../lib/motion";

type EmptyRisksProps = {
  onRefresh?: () => void;
};

export default function EmptyRisks({
  onRefresh,
}: EmptyRisksProps) {
  return (
    <motion.div
      variants={scaleVariants}
      initial="initial"
      animate="animate"
      transition={smoothTransition}
    >
      <Card className="rounded-4xl border border-emerald-200 bg-white px-8 py-16 text-center shadow-sm">
        {/* Icon */}

        <motion.div
          animate={{
            scale: [1, 1.06, 1],
            opacity: [1, 0.85, 1],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
        >
          <ShieldCheck
            size={42}
            aria-hidden="true"
          />
        </motion.div>

        {/* Content */}

        <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-900">
          All Clear
        </h2>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-slate-500">
          Excellent news. No active operational
          risks have been detected across your
          organisation.
        </p>

        <p className="mx-auto mt-2 max-w-lg text-sm leading-7 text-slate-400">
          Participant wellbeing, compliance and
          operational safety are currently within
          acceptable thresholds.
        </p>

        {/* Status */}

        <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
          <Sparkles
            size={18}
            aria-hidden="true"
          />

          System Status: Healthy
        </div>

        {/* Action */}

        <motion.div
          whileHover={buttonHover}
          whileTap={buttonTap}
          transition={smoothTransition}
          className="mt-10"
        >
          <Button
            title="Refresh Monitoring"
            variant="secondary"
            onClick={onRefresh}
          >
            Refresh Monitoring
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}