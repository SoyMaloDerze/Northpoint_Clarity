import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import RiskHeader from "../components/risks/RiskHeader";
import LiveRiskBanner from "../components/risks/LiveRiskBanner";
import RiskStats from "../components/risks/RiskStats";
import RiskToolbar from "../components/risks/RiskToolbar";
import RiskList from "../components/risks/RiskList";
import RisksTable from "../components/risks/RisksTable";
import RiskDrawer from "../components/risks/RiskDrawer";

import { participants } from "../mock/participants";
import { risks } from "../mock/risks";

import type { Risk } from "../types/risk";

import {
  pageVariants,
  smoothTransition,
} from "../lib/motion";

type ViewMode =
  | "list"
  | "table";

export default function RiskCenterPage() {
  const [search, setSearch] = useState("");

  const [severity, setSeverity] = useState("all");

  const [status, setStatus] = useState("all");

  const [view, setView] = useState<ViewMode>("list");

  const [selectedRisk, setSelectedRisk] = useState<Risk | null>(null);

  function handleOpenRisk(
    risk: Risk,
  ) {
    setSelectedRisk(risk);
  }

  function handleCloseRisk() {
    setSelectedRisk(null);
  }

  function handleGenerateReport() {
    console.log(
      "Generate Risk Report",
    );
  }

  const visibleRisks =
    useMemo(() => {
      return risks
        .filter((risk) => {
          const participant =
            participants.find(
              (participant) =>
                participant.id ===
                risk.participantId,
            );

          const participantName =
            participant?.fullName ??
            "";

          const matchesSearch =
            risk.title
              .toLowerCase()
              .includes(
                search.toLowerCase(),
              ) ||
            participantName
              .toLowerCase()
              .includes(
                search.toLowerCase(),
              );

          const matchesSeverity =
            severity === "all" ||
            risk.level === severity;

          const matchesStatus =
            status === "all" ||
            risk.status === status;

          return (
            matchesSearch &&
            matchesSeverity &&
            matchesStatus
          );
        })
        .map((risk) => {
          const participant =
            participants.find(
              (participant) =>
                participant.id ===
                risk.participantId,
            );

          return {
            risk,
            participantName:
              participant?.fullName ??
              "Unknown Participant",
          };
        });
    }, [
      search,
      severity,
      status,
    ]);

  const selectedParticipant =
    participants.find(
      (participant) =>
        participant.id ===
        selectedRisk?.participantId,
    );

  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={smoothTransition}
      className="space-y-8"
    >
      {/* Header */}

      <RiskHeader
        onAction={
          handleGenerateReport
        }
      />

      {/* Live */}

      <LiveRiskBanner />

      {/* Stats */}

      <RiskStats />

      {/* Toolbar */}

      <RiskToolbar
        search={search}
        onSearchChange={
          setSearch
        }
        severity={severity}
        onSeverityChange={
          setSeverity
        }
        status={status}
        onStatusChange={
          setStatus
        }
        view={view}
        onViewChange={setView}
      />

      {/* Content */}

      {view === "list" ? (
        <RiskList
          risks={visibleRisks}
          onOpenRisk={
            handleOpenRisk
          }
        />
      ) : (
        <RisksTable
          risks={visibleRisks}
          onOpenRisk={
            handleOpenRisk
          }
        />
      )}

      {/* Drawer */}

      {selectedRisk && (
        <RiskDrawer
          open={
            !!selectedRisk
          }
          risk={selectedRisk}
          participantName={
            selectedParticipant?.fullName ??
            "Unknown Participant"
          }
          onClose={
            handleCloseRisk
          }
        />
      )}
    </motion.section>
  );
}