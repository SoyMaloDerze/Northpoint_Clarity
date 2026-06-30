import { Bell, Mail, Smartphone } from "lucide-react";

import {useState} from "react";

import SettingsSection from "./SettingsSection";

import Toggle from "../ui/Toggle";

export default function NotificationSettings() {
  return (
    <SettingsSection
      title="Notifications"
      description="Choose how you'd like to receive important updates, reminders and activity alerts."
    >
      <div className="space-y-5">

        <NotificationItem
          icon={Bell}
          title="In-App Notifications"
          description="Receive real-time updates while using Northpoint Clarity."
          defaultChecked
        />

        <NotificationItem
          icon={Mail}
          title="Email Notifications"
          description="Get daily summaries and important operational updates by email."
          defaultChecked
        />

        <NotificationItem
          icon={Smartphone}
          title="Push Notifications"
          description="Receive instant alerts on your registered mobile devices."
        />

      </div>
    </SettingsSection>
  );
}

type NotificationItemProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  defaultChecked?: boolean;
};

function NotificationItem({
  icon: Icon,
  title,
  description,
  defaultChecked = false,
}: NotificationItemProps) {
    const [enabled, setEnabled] = useState(defaultChecked);
    return (
    <div className="flex items-center justify-between gap-6 rounded-3xl border border-slate-200 p-5 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
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

      <Toggle
        checked={enabled}
        onChange={setEnabled}
      />

    </div>
  );
}