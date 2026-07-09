import AppLayout from "./AppLayout";

import { TEAM_LEADER_NAVIGATION } from "../../constants/navigation";

export default function TeamLeaderLayout() {
  return (
    <AppLayout
      items={TEAM_LEADER_NAVIGATION}
      workspace="Team Leader"
      name="Michael Johnson"
      role="Team Leader"
    //   email="michael@northpoint.com"
      notificationCount={5}
    />
  );
}