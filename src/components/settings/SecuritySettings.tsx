import {
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import Button from "../ui/Button";

import SettingsSection from "./SettingsSection";

export default function SecuritySettings() {
  return (
    <SettingsSection
      title="Security"
      description="Protect your account and control how administrators access Northpoint Clarity."
    >
      {/* Security Status */}

      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
            <ShieldCheck
              size={22}
              aria-hidden="true"
            />
          </div>

          <div>
            <h3 className="font-bold text-emerald-900">
              Your account is secure
            </h3>

            <p className="mt-1 text-sm text-emerald-700">
              Two-factor authentication is enabled and your
              security settings are up to date.
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}

      <div className="space-y-5">
        <SecurityItem
          icon={KeyRound}
          title="Change Password"
          description="Update your password regularly to keep your account secure."
          actionLabel="Update"
        />

        <SecurityItem
          icon={Smartphone}
          title="Two-Factor Authentication"
          description="Add an additional verification step when signing in."
          actionLabel="Manage"
        />

        <SecurityItem
          icon={LockKeyhole}
          title="Active Sessions"
          description="Review devices currently signed in to your account."
          actionLabel="View"
        />
      </div>
    </SettingsSection>
  );
}

type SecurityItemProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  actionLabel: string;
};

function SecurityItem({
  icon: Icon,
  title,
  description,
  actionLabel,
}: SecurityItemProps) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 p-6 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
          <Icon
            size={20}
            aria-hidden="true"
          />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 max-w-xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <Button
        title={actionLabel}
        variant="secondary"
      >
        {actionLabel}
      </Button>
    </div>
  );
}