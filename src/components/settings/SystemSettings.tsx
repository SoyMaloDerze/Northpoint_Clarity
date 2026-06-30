import {
  Database,
  Globe,
  HardDrive,
  RefreshCw,
} from "lucide-react";

import {useState} from "react";

import Toggle from "../ui/Toggle";

import SettingsSection from "./SettingsSection";

export default function SystemSettings() {
  
  return (
    <SettingsSection
      title="System"
      description="Manage workspace preferences and system-wide behaviour."
    >
      <div className="space-y-5">

        <SystemItem
          icon={RefreshCw}
          title="Automatic Updates"
          description="Keep Northpoint Clarity updated with the latest improvements."
          defaultChecked
        />

        <SystemItem
          icon={Database}
          title="Automatic Backups"
          description="Create scheduled backups of operational data."
          defaultChecked
        />

        <SystemItem
          icon={Globe}
          title="Public API Access"
          description="Allow approved external integrations to access workspace data."
        />

        <SystemItem
          icon={HardDrive}
          title="Offline Caching"
          description="Store frequently used data locally for faster loading."
          defaultChecked
        />

      </div>
    </SettingsSection>
  );
}

type SystemItemProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  defaultChecked?: boolean;
};

function SystemItem({
  icon: Icon,
  title,
  description,
  defaultChecked = false,
}: SystemItemProps) {
  const [enabled, setEnabled] = useState(defaultChecked);
  return (
    <div className="flex items-center justify-between gap-6 rounded-3xl border border-slate-200 p-5 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
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