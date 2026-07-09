import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

import useSidebar from "../../app/contexts/useSidebar";

import { cn } from "../../utils/cn";

import {
  sidebarItemHover,
  sidebarItemTap,
  sidebarLabelVariants,
  sidebarIconVariants,
  smoothTransition,
} from "../../lib/motion";

type SidebarItemProps = {
  label: string;
  icon: LucideIcon;
  to: string;
};

export default function SidebarItem({
  label,
  icon: Icon,
  to,
}: SidebarItemProps) {
  const {
    isCollapsed,
    closeMobile,
  } = useSidebar();

  return (
    <motion.div
      layout
      whileHover={sidebarItemHover}
      whileTap={sidebarItemTap}
      transition={smoothTransition}
    >
      <NavLink
        to={to}
        onClick={closeMobile}
        title={isCollapsed ? label : undefined}
        className={({ isActive }) =>
          cn(
            "group flex h-12 items-center rounded-2xl transition-colors duration-200",
            isCollapsed
              ? "justify-center"
              : "gap-3 px-3",
            isActive
              ? "bg-emerald-600 text-white"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
          )
        }
      >
        {({ isActive }) => (
          <>
            {/* Icon */}

            <motion.div
              variants={sidebarIconVariants}
              initial="initial"
              animate="animate"
              transition={smoothTransition}
              className="flex h-10 w-10 shrink-0 items-center justify-center"
            >
              <Icon
                size={20}
                aria-hidden="true"
                className={cn(
                  "transition-colors duration-200",
                  isActive
                    ? "text-white"
                    : "text-slate-500 group-hover:text-emerald-600",
                )}
              />
            </motion.div>

            {/* Label */}

            <AnimatePresence initial={false}>
              {!isCollapsed && (
                <motion.span
                  variants={sidebarLabelVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={smoothTransition}
                  className="whitespace-nowrap text-sm font-medium"
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </>
        )}
      </NavLink>
    </motion.div>
  );
}