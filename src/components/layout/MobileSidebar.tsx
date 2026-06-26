import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import useSidebar from "../../app/contexts/useSidebar";

import { APP } from "../../constants/app";
import type { NavigationItem } from "../../constants/navigation";

import SidebarFooter from "./SidebarFooter";
import SidebarItem from "./SidebarItem";

import {
  modalBackdrop,
  smoothTransition,
} from "../../lib/motion";

type MobileSidebarProps = {
  items: NavigationItem[];
  role: "Administrator" | "Team Leader";
};

export default function MobileSidebar({
  items,
  role,
}: MobileSidebarProps) {
  const {
    isMobileOpen,
    closeMobile,
  } = useSidebar();

  return (
    <AnimatePresence>
      {isMobileOpen && (
        <>
          {/* Backdrop */}

          <motion.div
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            onClick={closeMobile}
            className="fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-md lg:hidden"
          />

          {/* Drawer */}

          <motion.aside
            initial={{
              x: "-100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 34,
            }}
            className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col bg-white px-4 py-4 shadow-[0_20px_80px_rgba(15,23,42,.22)] lg:hidden"
          >
            {/* Handle */}

            <div className="mb-5 flex justify-center">
              <div className="h-1 w-12 rounded-full bg-slate-300" />
            </div>

            {/* Workspace */}

            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
                <ShieldCheck
                  size={22}
                  aria-hidden="true"
                />
              </div>

              <h1 className="mt-5 text-lg font-bold text-slate-900">
                {APP.NAME}
              </h1>

              <p className="mt-1 text-xs text-slate-500">
                {role} Workspace
              </p>
            </div>

            {/* Divider */}

            <div className="my-3 h-px bg-slate-200" />

            {/* Navigation */}

            <nav className="flex-1">
              {items.map((item) => (
                <SidebarItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  to={item.path}
                />
              ))}
            </nav>

            {/* Divider */}

            <div className="my-0.5 h-px bg-slate-200" />

            {/* Footer */}

            <SidebarFooter />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}