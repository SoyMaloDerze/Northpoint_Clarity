import {
  Bell,
  ChevronRight,
} from "lucide-react";

import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";

import SidebarToggle from "./SidebarToggle";

type TopBarProps = {
  name: string;
  role: string;
  notificationCount?: number;
};

export default function TopBar({
  name,
  role,
  notificationCount = 0,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}

        <div className="flex items-center gap-4">
          <div className="lg:hidden">
            <SidebarToggle mobile />
          </div>

          <div className="hidden lg:block">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              Northpoint Clarity
            </p>

            <h2 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
              {role}
            </h2>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notifications */}

          <button
            type="button"
            title="Notifications"
            className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white transition-colors duration-200 hover:bg-slate-100"
          >
            <Bell
              size={19}
              className="text-slate-700"
              aria-hidden="true"
            />

            {notificationCount > 0 && (
              <Badge
                size="sm"
                variant="danger"
                className="absolute -right-1 -top-1"
              >
                {notificationCount}
              </Badge>
            )}
          </button>

          {/* Divider */}

          <div className="hidden h-8 w-px bg-slate-200 lg:block" />

          {/* Profile */}

          <button
            type="button"
            title={`${role} Profile`}
            className="flex items-center gap-3 rounded-2xl p-1.5 transition-colors duration-200 hover:bg-slate-100"
          >
            <Avatar
              name={name}
              size="md"
            />

            <div className="hidden xl:block text-left">
              <p className="text-sm font-semibold text-slate-900">
                {name}
              </p>

              <p className="text-xs text-slate-500">
                {role}
              </p>
            </div>

            <ChevronRight
              size={16}
              className="hidden xl:block text-slate-400"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}