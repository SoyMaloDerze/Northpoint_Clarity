import AppLayout from "./AppLayout";

import { ADMIN_NAVIGATION } from "../../constants/navigation";

export default function AdminLayout() {
  return (
    <AppLayout
      items={ADMIN_NAVIGATION}
      workspace="Administrator"
      name="Administrator"
      role="System Owner"
      // email="admin@northpoint.com"
      notificationCount={3}
    />
  );
}