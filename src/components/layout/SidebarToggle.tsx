import { motion } from "framer-motion";
import {
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";

import useSidebar from "../../app/contexts/useSidebar";

import {
  buttonHover,
  buttonTap,
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
      whileHover={buttonHover}
      whileTap={buttonTap}
      transition={smoothTransition}
      onClick={
        mobile
          ? toggleMobile
          : toggleCollapse
      }
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
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
        transition={smoothTransition}
      >
        <Icon
          size={20}
          aria-hidden="true"
        />
      </motion.div>
    </motion.button>
  );
}