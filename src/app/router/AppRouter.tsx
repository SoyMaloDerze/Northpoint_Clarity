import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import { ROUTES } from "../../lib/routes";

import LandingPage from "../../pages/LandingPage";
import AdminLoginPage from "../../pages/AdminLoginPage";
import TeamLeaderLoginPage from "../../pages/TeamLeaderLoginPage";
import NotFoundPage from "../../pages/NotFoundPage";

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

        {/* Temporary redirects */}

        <Route
          path={ROUTES.ADMIN_DASHBOARD}
          element={<Navigate to={ROUTES.ADMIN_LOGIN} replace />}
        />

        <Route
          path={ROUTES.TEAM_LEADER_DASHBOARD}
          element={
            <Navigate
              to={ROUTES.TEAM_LEADER_LOGIN}
              replace
            />
          }
        />

        {/* 404 */}

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}