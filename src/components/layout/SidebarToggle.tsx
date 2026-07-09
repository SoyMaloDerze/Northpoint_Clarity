import { motion } from "framer-motion";
import {
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";

import useSidebar from "../../app/contexts/useSidebar";

import {
  sidebarToggleHover,
  sidebarToggleTap,
  smoothTransition,
} from "../../lib/motion";

type SidebarToggleProps = {
  mobile?: boolean;
};

export default function SidebarToggle({
  mobile = false,
}: SidebarToggleProps) {
  const {
    isCollapsed,
    isMobileOpen,
    toggleCollapse,
    toggleMobile,
  } = useSidebar();

  const Icon = mobile
    ? isMobileOpen
      ? X
      : Menu
    : ChevronLeft;

  return (
    <motion.button
      type="button"
      title={
        mobile
          ? isMobileOpen
            ? "Close menu"
            : "Open menu"
          : isCollapsed
            ? "Expand sidebar"
            : "Collapse sidebar"
      }
      whileHover={sidebarToggleHover}
      whileTap={sidebarToggleTap}
      transition={smoothTransition}
      onClick={
        mobile
          ? toggleMobile
          : toggleCollapse
      }
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
    >
      <motion.div
        animate={{
          rotate: mobile
            ? isMobileOpen
              ? 180
              : 0
            : isCollapsed
              ? 180
              : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <Icon
          size={20}
          aria-hidden="true"
        />
      </motion.div>
    </motion.button>
  );
}