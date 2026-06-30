import {
  Check,
  Monitor,
  Palette,
  Sparkles,
} from "lucide-react";

import {useState} from "react";

import Toggle from "../ui/Toggle";

import SettingsSection from "./SettingsSection";


export default function AppearanceSettings() {
  return (
    <SettingsSection
      title="Appearance"
      description="Personalise the look and feel of your workspace."
    >
      {/* Accent Color */}

      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          Accent Colour
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Choose the primary accent used throughout your workspace.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <ColorCard
            active
            name="Emerald"
            color="bg-emerald-500"
          />

          <ColorCard
            name="Blue"
            color="bg-sky-500"
          />

          <ColorCard
            name="Purple"
            color="bg-violet-500"
          />

          <ColorCard
            name="Amber"
            color="bg-amber-500"
          />
        </div>
      </div>

      {/* Preferences */}

      <div className="space-y-5">

        <AppearanceItem
          icon={Sparkles}
          title="Interface Animations"
          description="Enable smooth transitions and subtle motion throughout the application."
          defaultChecked
        />

        <AppearanceItem
          icon={Monitor}
          title="Compact Layout"
          description="Reduce spacing to display more information on screen."
        />

        <AppearanceItem
          icon={Palette}
          title="High Contrast"
          description="Increase contrast to improve readability."
        />

      </div>
    </SettingsSection>
  );
}

type AppearanceItemProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  defaultChecked?: boolean;
};

function AppearanceItem({
  icon: Icon,
  title,
  description,
  defaultChecked = false,
}: AppearanceItemProps) {
    const [enabled, setEnabled] = useState(defaultChecked);
    return (
    
    <div className="flex items-center justify-between gap-6 rounded-3xl border border-slate-200 p-5 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50">

      <div className="flex items-start gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
          <Icon size={20} />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
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

type ColorCardProps = {
  name: string;
  color: string;
  active?: boolean;
};

function ColorCard({
  name,
  color,
  active = false,
}: ColorCardProps) {
  return (
    <button
      type="button"
      className={`relative flex w-28 flex-col items-center gap-3 rounded-3xl border p-5 transition-all duration-300 ${
        active
          ? "border-emerald-500 bg-emerald-50"
          : "border-slate-200 hover:border-slate-300"
      }`}
    >
      <div
        className={`h-10 w-10 rounded-full ${color}`}
      />

      <span className="text-sm font-medium text-slate-800">
        {name}
      </span>

      {active && (
        <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
          <Check size={14} />
        </div>
      )}
    </button>
  );
}