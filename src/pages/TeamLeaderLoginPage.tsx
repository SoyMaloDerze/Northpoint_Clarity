import { UsersRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../lib/routes"

import AuthLayout from "../app/layouts/AuthLayout";
import AuthFormCard from "../components/auth/AuthFormCard";
import TeamLeaderPreview from "../components/auth/TeamLeaderPreview";

export default function TeamLeaderLoginPage() {
  const navigate = useNavigate();
  return (
    <AuthLayout preview={<TeamLeaderPreview/>}>
      <AuthFormCard
        icon={UsersRound}
        workspace="Team Leader Workspace"
        title="Team Leader Login"
        description="Secure access to participants, shifts, goals and outcome reporting."
        demoEmail="leader@northpoint.com"
        demoPassword="Demo@123"
        buttonText="Enter Workspace"
        onSubmit={() =>
          navigate(ROUTES.TEAM_LEADER.DASHBOARD)
        }
      />
    </AuthLayout>
  );
}