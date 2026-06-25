import { ShieldCheck } from "lucide-react";

import AuthLayout from "../app/layouts/AuthLayout";
import AuthFormCard from "../components/auth/AuthFormCard";
import AdminPreview from "../components/auth/AdminPreview";

export default function AdminLoginPage() {
  return (
    <AuthLayout preview={<AdminPreview/>}>
      <AuthFormCard
        icon={ShieldCheck}
        workspace="Administrator Workspace"
        title="Administrator Login"
        description="Secure access to participant management, analytics, reports and operational intelligence."
        demoEmail="admin@northpoint.com"
        demoPassword="Demo@123"
        buttonText="Enter Workspace"
      />
    </AuthLayout>
  );
}