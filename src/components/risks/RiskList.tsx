import { motion } from "framer-motion";

import EmptyRisks from "./EmptyRisks";
import RiskCard from "./RiskCard";

import {
  staggerContainer,
  staggerItem,
} from "../../lib/motion";

import type { Risk } from "../../types/risk";

type RiskListItem = {
  risk: Risk;
  participantName: string;
};

type RiskListProps = {
  risks: RiskListItem[];

  onOpenRisk?: (
    risk: Risk,
  ) => void;
};

export default function RiskList({
  risks,
  onOpenRisk,
}: RiskListProps) {
  if (risks.length === 0) {
    return <EmptyRisks />;
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-6"
    >
      {risks.map(
        ({
          risk,
          participantName,
        }) => (
          <motion.div
            key={risk.id}
            variants={staggerItem}
          >
            <RiskCard
              risk={risk}
              participantName={
                participantName
              }
              onOpen={onOpenRisk}
            />
          </motion.div>
        ),
      )}
    </motion.section>
  );
}