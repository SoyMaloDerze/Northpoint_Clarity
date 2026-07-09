import { motion, AnimatePresence } from "framer-motion";
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
        width: isCollapsed ? 96 : 280,
      }}
      transition={smoothTransition}
      className="hidden h-full shrink-0 border-r border-slate-200 bg-white lg:flex"
    >
      <div className="flex h-full w-full flex-col px-4 py-5">
        {/* Header */}

        <motion.div
          layout
          className={`flex items-start ${
            isCollapsed
              ? "flex-col gap-5"
              : "justify-between"
          }`}
        >
          <div
            className={`flex items-center ${
              isCollapsed
                ? "w-full flex-col justify-center gap-4"
                : "gap-3"
            }`}
          >
            <motion.div
              layout
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-100"
            >
              <ShieldCheck
                size={24}
                aria-hidden="true"
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.div
                  key="workspace"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -10,
                  }}
                  transition={smoothTransition}
                >
                  <h1 className="text-lg font-bold tracking-tight text-slate-900">
                    {APP.NAME}
                  </h1>

                  <p className="mt-0.5 text-sm font-medium text-slate-500">
                    {role}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!isCollapsed && <SidebarToggle />}
        </motion.div>

        {/* Collapse Toggle */}

        {isCollapsed && (
          <motion.div
            layout
            className="mt-2 flex justify-center"
          >
            <SidebarToggle />
          </motion.div>
        )}

        {/* Navigation */}

        <motion.nav
          layout
          className="mt-8 flex-1 space-y-1.5"
        >
          {items.map((item) => (
            <SidebarItem
              key={item.path}
              label={item.label}
              icon={item.icon}
              to={item.path}
            />
          ))}
        </motion.nav>

        {/* Footer */}

        <motion.div layout>
          <SidebarFooter />
        </motion.div>
      </div>
    </motion.aside>
  );
}