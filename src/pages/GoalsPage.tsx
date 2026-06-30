import { useState } from "react";
import { motion } from "framer-motion";

import GoalsHeader from "../components/goals/GoalsHeader";
import GoalStats from "../components/goals/GoalStats";
import GoalToolbar from "../components/goals/GoalToolbar";
import GoalList from "../components/goals/GoalList";
import GoalsTable from "../components/goals/GoalsTable";
import GoalDrawer from "../components/goals/GoalDrawer";

import { goals } from "../mock/goals";

import type { Goal } from "../types/goal";

import {
  pageVariants,
  smoothTransition,
} from "../lib/motion";

type ViewMode =
  | "list"
  | "table";

export default function GoalsPage() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [category, setCategory] = useState("all");

  const [view, setView] = useState<ViewMode>("list");

  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);

  function handleOpenGoal(
    goal: Goal,
  ) {
    setSelectedGoal(goal);
  }

  function handleCloseGoal() {
    setSelectedGoal(null);
  }

  function handleCreateGoal() {
    console.log("Create Goal");
  }

  // Temporary.
  // Filtering will move to API queries.

  const visibleGoals =
    goals.filter((goal) => {
      const matchesSearch =
        goal.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        goal.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "all" ||
        goal.status === status;

      const matchesCategory =
        category === "all" ||
        goal.category === category;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory
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
      <GoalsHeader
        onAction={handleCreateGoal}
      />

      <GoalStats />

      <GoalToolbar
        search={search}
        onSearchChange={setSearch}
        status={status}
        onStatusChange={setStatus}
        category={category}
        onCategoryChange={setCategory}
        view={view}
        onViewChange={setView}
      />

      {view === "list" ? (
        <GoalList
          goals={visibleGoals}
          onOpenGoal={handleOpenGoal}
        />
      ) : (
        <GoalsTable
          goals={visibleGoals}
          onOpenGoal={handleOpenGoal}
        />
      )}

      {/* Build next */}

      {selectedGoal && (
        <>
          
          <GoalDrawer
            goal={selectedGoal}
            open={!!selectedGoal}
            onClose={handleCloseGoal}
          />
         
        </>
      )}
    </motion.section>
  );
}