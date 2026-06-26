import {
  Bell,
  ChevronDown,
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
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="flex h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}

        <div className="flex items-center gap-3">
          <div className="lg:hidden">
            <SidebarToggle mobile />
          </div>

          <div className="hidden lg:block">
            <p className="text-sm font-medium text-slate-500">
              Northpoint Clarity
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          {/* Notifications */}

          <button
            type="button"
            title="Notifications"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
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

          <div className="hidden h-8 w-px bg-slate-200 sm:block" />

          {/* Profile */}

          <button
            type="button"
            title={`${role} menu`}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1.5 pr-3 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50"
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

            <ChevronDown
              size={16}
              className="hidden xl:block text-slate-500"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </header>
  );
}