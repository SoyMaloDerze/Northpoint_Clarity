import {
  Bell,
  LockKeyhole,
  Monitor,
  Settings2,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  buttonHover,
  buttonTap,
  smoothTransition,
} from "../../lib/motion";

type SettingsSection =
  | "profile"
  | "notifications"
  | "appearance"
  | "security"
  | "system";

type SettingsSidebarProps = {
  active: SettingsSection;
  onChange: (
    section: SettingsSection,
  ) => void;
};

const sections = [
  {
    id: "profile",
    label: "Profile",
    icon: UserRound,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Monitor,
  },
  {
    id: "security",
    label: "Security",
    icon: LockKeyhole,
  },
  {
    id: "system",
    label: "System",
    icon: Settings2,
  },
] satisfies {
  id: SettingsSection;
  label: string;
  icon: React.ElementType;
}[];

export default function SettingsSidebar({
  active,
  onChange,
}: SettingsSidebarProps) {
  return (
    <aside className="rounded-4xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-4 flex items-center gap-3 rounded-3xl bg-emerald-50 p-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
          <ShieldCheck size={20} />
        </div>

        <div>
          <p className="font-semibold text-slate-900">
            Workspace
          </p>

          <p className="text-sm text-slate-500">
            Preferences
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;

          const isActive =
            active === section.id;

          return (
            <motion.button
              key={section.id}
              whileHover={buttonHover}
              whileTap={buttonTap}
              transition={smoothTransition}
              type="button"
              onClick={() =>
                onChange(section.id)
              }
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 ${
                isActive
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />

              <span className="font-medium">
                {section.label}
              </span>
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
}