import { AnimatePresence, motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useEffect } from "react";

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

  useEffect(() => {
    if (!isMobileOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

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
            className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-md lg:hidden"
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
            className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white px-5 py-5 shadow-[0_20px_80px_rgba(15,23,42,.22)] lg:hidden"
          >
            {/* Drag Handle */}

            <div className="mb-5 flex justify-center">
              <div className="h-1.5 w-14 rounded-full bg-slate-300" />
            </div>

            {/* Header */}

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-100">
                <ShieldCheck
                  size={24}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h1 className="text-lg font-bold tracking-tight text-slate-900">
                  {APP.NAME}
                </h1>

                <p className="mt-0.5 text-sm font-medium text-slate-500">
                  {role}
                </p>
              </div>
            </div>

            {/* Divider */}

            <div className="my-6 h-px bg-slate-200" />

            {/* Navigation */}

            <nav className="flex-1 space-y-1.5 overflow-y-auto">
              {items.map((item) => (
                <SidebarItem
                  key={item.path}
                  label={item.label}
                  icon={item.icon}
                  to={item.path}
                />
              ))}
            </nav>

            {/* Footer */}

            <SidebarFooter />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}