import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

import useSidebar from "../../app/contexts/useSidebar";

import { cn } from "../../utils/cn";

import {
  cardHover,
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
  const { isCollapsed, closeMobile } =
    useSidebar();

  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
    >
      <NavLink
        to={to}
        onClick={closeMobile}
        className={({ isActive }) =>
          cn(
            "group flex py-2.5 items-center rounded-xl transition-all duration-300",
            isCollapsed
              ? "justify-center px-0"
              : "gap-3 px-3",
            isActive
              ? "bg-emerald-600 text-white shadow-lg"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
          )
        }
        title={
          isCollapsed
            ? label
            : undefined
        }
      >
        {({ isActive }) => (
          <>
            <Icon
              size={20}
              className={cn(
                "shrink-0 transition-colors duration-300",
                isActive
                  ? "text-white"
                  : "text-slate-500 group-hover:text-emerald-600",
              )}
            />

            <motion.span
              initial={false}
              animate={{
                opacity: isCollapsed ? 0 : 1,
                width: isCollapsed ? 0 : "auto",
              }}
              transition={smoothTransition}
              className={cn(
                "overflow-hidden whitespace-nowrap font-medium",
                isCollapsed && "hidden",
              )}
            >
              {label}
            </motion.span>
          </>
        )}
      </NavLink>
    </motion.div>
  );
}