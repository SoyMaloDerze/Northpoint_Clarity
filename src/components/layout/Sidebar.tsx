import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import useSidebar from "../../app/contexts/useSidebar";

import { APP } from "../../constants/app";
import type { NavigationItem } from "../../constants/navigation";

import SidebarFooter from "./SidebarFooter";
import SidebarItem from "./SidebarItem";
import SidebarToggle from "./SidebarToggle";

import {
  smoothTransition,
} from "../../lib/motion";

type SidebarProps = {
  items: NavigationItem[];
  role: "Administrator" | "Team Leader";
  email: string;
};

export default function Sidebar({
  items,
  role,
  
}: SidebarProps) {
  const { isCollapsed } = useSidebar();

  return (
    <motion.aside
      layout
      animate={{
        width: isCollapsed
          ? 96
          : 280,
      }}
      transition={smoothTransition}
      className="sticky top-0 hidden h-screen shrink-0 overflow-hidden border-r border-slate-200 bg-white lg:flex"
    >
      <div className="flex w-full flex-col px-4 py-6">
        {/* Header */}

        <div
          className={`flex items-center ${
            isCollapsed
              ? "justify-center"
              : "justify-between"
          }`}
        >
          <div
            className={`flex items-center ${
              isCollapsed
                ? ""
                : "gap-3"
            }`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
              <ShieldCheck
                size={26}
                aria-hidden="true"
              />
            </div>

            {!isCollapsed && (
              <motion.div
                initial={false}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={smoothTransition}
              >
                <h1 className="text-lg font-bold text-slate-900">
                  {APP.NAME}
                </h1>

                <p className="text-sm text-slate-500">
                  {role}
                </p>
              </motion.div>
            )}
          </div>

          {!isCollapsed && (
            <SidebarToggle />
          )}
        </div>

        {/* Collapsed Toggle */}

        {isCollapsed && (
          <div className="mt-6 flex justify-center">
            <SidebarToggle />
          </div>
        )}

        {/* Navigation */}

        <nav className="mt-6 flex-1 space-y-1">
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              to={item.path}
            />
          ))}
        </nav>

        {/* Footer */}

        <SidebarFooter />
      </div>
    </motion.aside>
  );
}