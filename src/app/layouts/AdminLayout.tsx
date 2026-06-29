import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import SidebarProvider from "../contexts/SidebarProvider";

import MobileSidebar from "../../components/layout/MobileSidebar";
import Sidebar from "../../components/layout/Sidebar";
import Topbar from "../../components/layout/Topbar";

import { ADMIN_NAVIGATION } from "../../constants/navigation";

import {
  pageVariants,
  smoothTransition,
} from "../../lib/motion";

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <motion.main
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={smoothTransition}
        className="min-h-screen bg-slate-100"
      >
        <div className="flex min-h-screen">
          {/* Desktop Sidebar */}

          <Sidebar
            items={ADMIN_NAVIGATION}
            role="Administrator"
            email="admin@northpoint.com"
          />

          {/* Mobile Sidebar */}

          <MobileSidebar
            items={ADMIN_NAVIGATION}
            role="Administrator"
            // email="admin@northpoint.com"
          />

          {/* Content */}

          <section className="flex min-w-0 flex-1 flex-col">
            <Topbar
              name="Administrator"
              role="System Owner"
              notificationCount={3}
            />

            <motion.main
              layout
              transition={smoothTransition}
              className="flex-1 overflow-y-auto p-6 lg:p-8"
            >
              <Outlet />
            </motion.main>
          </section>
        </div>
      </motion.main>
    </SidebarProvider>
  );
}