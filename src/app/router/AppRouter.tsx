import {
  BrowserRouter,
  // Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ROUTES } from "../../lib/routes";

import LandingPage from "../../pages/LandingPage";
import AdminLoginPage from "../../pages/AdminLoginPage";
import TeamLeaderLoginPage from "../../pages/TeamLeaderLoginPage";
import NotFoundPage from "../../pages/NotFoundPage";

import AdminDashboardPage from "../../pages/AdminDashboardPage";

import AdminLayout from "../layouts/AdminLayout";
import TeamLeaderLayout from "../layouts/TeamLeaderLayout";

// Admin Pages
import ParticipantsPage from "../../pages/ParticipantsPage";
import ReportsPage from "../../pages/ReportsPage";
import GoalsPage from "../../pages/GoalsPage";
import RiskCenterPage from "../../pages/RiskCenterPage";
import AnalyticsPage from "../../pages/AnalyticsPage";
import SettingsPage from "../../pages/SettingsPage";

// Team Leader Pages
import TeamLeaderDashboardPage from "../../pages/teamLeader/TeamLeaderDashboardPage";
import NotificationsPage from "../../pages/teamLeader/NotificationsPage";
import ProfilePage from "../../pages/teamLeader/ProfilePage";
import TeamLeaderParticipantsPage from "../../pages/teamLeader/TeamLeaderParticipantsPage";
import WorkspacePage from "../../pages/teamLeader/WorkspacePage";
import SchedulePage from "../../pages/teamLeader/SchedulePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<LandingPage />}
        />

        <Route
          path={ROUTES.ADMIN_LOGIN}
          element={<AdminLoginPage />}
        />

        <Route
          path={ROUTES.TEAM_LEADER_LOGIN}
          element={<TeamLeaderLoginPage />}
        />

        {/* Admin Side */}

        <Route
            path="/admin"
            element={<AdminLayout />}
        >
            <Route
                path="dashboard"
                element={<AdminDashboardPage />}
            />
            <Route
                path="participants"
                element={<ParticipantsPage />}
            />
            <Route
                path="reports"
                element={<ReportsPage />}
            />
            <Route
                path="goals"
                element={<GoalsPage />}
            />
            <Route
                path="risks"
                element={<RiskCenterPage />}
            />
            <Route
                path="analytics"
                element={<AnalyticsPage />}
            />
            <Route
                path="settings"
                element={<SettingsPage />}
            />
        </Route>

        {/* Team Leader Side */}

        <Route
          path="/team-leader"
          element={<TeamLeaderLayout />}
        >
          <Route
            path="dashboard"
            element={<TeamLeaderDashboardPage />}
          />

          <Route
            path="participants"
            element={<TeamLeaderParticipantsPage />}
          />
  
          <Route
            path="workspace"
            element={<WorkspacePage />}
          />

          <Route
            path="schedule"
            element={<SchedulePage />}
          />

          <Route
            path="profile"
            element={<ProfilePage />}
          />

          <Route
            path="notifications"
            element={<NotificationsPage />}
          />

         
        </Route>

        {/* 404 */}

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}