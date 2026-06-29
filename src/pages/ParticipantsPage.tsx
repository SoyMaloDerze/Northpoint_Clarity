import { useState } from "react";
import { motion } from "framer-motion";

import ParticipantHeader from "../components/participants/ParticipantHeader";
import ParticipantStats from "../components/participants/ParticipantStats";
import ParticipantToolbar from "../components/participants/ParticipantToolbar";
import ParticipantList from "../components/participants/ParticipantList";
import ParticipantsTable from "../components/participants/ParticipantsTable";
import ParticipantDrawer from "../components/participants/ParticipantDrawer";
import { participants } from "../mock/participants";

import type { Participant } from "../types/participant";

import {
  pageVariants,
  smoothTransition,
} from "../lib/motion";

type ViewMode =
  | "list"
  | "table";

export default function ParticipantsPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [risk, setRisk] = useState("all");

  const [view, setView] = useState<ViewMode>("list");
  console.log(view);

  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);

  function handleOpenParticipant(
    participant: Participant,
  ) {
    setSelectedParticipant(participant);
  }

  function handleCloseParticipant() {
    setSelectedParticipant(null);
  }

  function handleCreateParticipant() {
    console.log("Participant Added");
  }

  // Temporary.
  // Filtering will move to API queries.

  const visibleParticipants =
    participants.filter((participant) => {
      const matchesSearch =
        participant.fullName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        participant.ndisNumber
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        participant.status === status;

      // Risk filtering will be connected
      // once risk data exists.

      const matchesRisk =
        risk === "all";

      return (
        matchesSearch &&
        matchesStatus &&
        matchesRisk
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
      <ParticipantHeader
        onAction={() => {handleCreateParticipant()}}
      />

      <ParticipantStats />

      <ParticipantToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        risk={risk}
        onRiskChange={setRisk}
        view={view}
        onViewChange={setView}
      />

      {view === "list" ? (
        <ParticipantList
          participants={
            visibleParticipants
          }
          onOpenParticipant={
            handleOpenParticipant
          }
        />
      ) : (
        <ParticipantsTable
          participants={
            visibleParticipants
          }
          onOpenParticipant={
            handleOpenParticipant
          }
        />
      )}

      {/* Participant Drawer */}

      {selectedParticipant && (
        <>
          {/* Build next */}

          <ParticipantDrawer
              participant={selectedParticipant}
              open={!!selectedParticipant}
              onClose={handleCloseParticipant}
          />
        </>
      )}
    </motion.section>
  );
}