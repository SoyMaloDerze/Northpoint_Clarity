import { useMemo, useState } from "react";

import ParticipantEmptyState from "../../components/teamLeader/participants/ParticipantEmptyState";
import ParticipantFilters, {
  type ParticipantFilter,
} from "../../components/teamLeader/participants/ParticipantFilters";
import ParticipantGrid from "../../components/teamLeader/participants/ParticipantGrid";
import ParticipantsHeader from "../../components/teamLeader/participants/ParticipantsHeader";
import ParticipantSearch from "../../components/teamLeader/participants/ParticipantSearch";

import { participants } from "../../mock/participants";

const TeamLeaderParticipantsPage = () => {
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState<ParticipantFilter>("All");

    useState<ParticipantFilter>("All");

  const filteredParticipants =
    useMemo(() => {
      return participants.filter(
        (participant) => {
          const matchesSearch =
            participant.fullName
              .toLowerCase()
              .includes(
                search.toLowerCase(),
              ) ||
            participant.primaryGoal
              .toLowerCase()
              .includes(
                search.toLowerCase(),
              ) ||
            participant.ndisNumber
              .toLowerCase()
              .includes(
                search.toLowerCase(),
              );

          const matchesFilter =
            filter === "All"
              ? true
              : participant.status ===
                filter.toLowerCase();

          return (
            matchesSearch &&
            matchesFilter
          );
        },
      );
    }, [search, filter]);

  return (
    <div className="mx-auto flex w-full max-w-[1800px] min-w-0 flex-col gap-8">
      {/* Header */}

      <ParticipantsHeader />

      {/* Search */}

      <ParticipantSearch
        value={search}
        onChange={setSearch}
      />

      {/* Filters */}

      <ParticipantFilters
        value={filter}
        onChange={setFilter}
      />

      {/* Content */}

      {filteredParticipants.length >
      0 ? (
        <ParticipantGrid
          participants={
            filteredParticipants
          }
        />
      ) : (
        <ParticipantEmptyState
          onReset={() => {
            setSearch("");
            setFilter("All");
          }}
        />
      )}
    </div>
  );
};

export default TeamLeaderParticipantsPage;