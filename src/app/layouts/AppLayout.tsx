import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import SidebarProvider from "../contexts/SidebarProvider";

import MobileSidebar from "../../components/layout/MobileSidebar";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import type { NavigationItem } from "../../constants/navigation";

import {
  pageVariants,
  smoothTransition,
} from "../../lib/motion";

type AppLayoutProps = {
  items: NavigationItem[];

  workspace: "Administrator" | "Team Leader";

  name: string;
  role: string;

//   email?: string;

  notificationCount?: number;
};

export default function AppLayout({
  items,
  workspace,
  name,
  role,
//   email = "",
  notificationCount = 0,
}: AppLayoutProps) {
  return (
    <SidebarProvider>
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={smoothTransition}
        className="h-screen overflow-hidden bg-slate-100"
      >
        <div className="flex h-full">
          {/* Desktop Sidebar */}

          <Sidebar
            items={items}
            role={workspace}
          />

          {/* Mobile Sidebar */}

          <MobileSidebar
            items={items}
            role={workspace}
          />

          {/* Content */}

          <section className="flex min-w-0 flex-1 flex-col overflow-hidden">
            <Topbar
              name={name}
              role={role}
              notificationCount={notificationCount}
            />

            <motion.main
              layout
              transition={smoothTransition}
              className="min-h-0 flex-1 overflow-y-auto p-6 lg:p-8"
            >
              <Outlet />
            </motion.main>
          </section>
        </div>
      </motion.main>
    </SidebarProvider>
  );
}