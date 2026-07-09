import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

import useSidebar from "../../app/contexts/useSidebar";

import Button from "../ui/Button";

import {
  sidebarItemHover,
  sidebarItemTap,
  smoothTransition,
} from "../../lib/motion";

export default function SidebarFooter() {
  const { isCollapsed } = useSidebar();

  return (
    <motion.footer
      layout
      transition={smoothTransition}
      className="mt-2 border-t border-slate-200 pt-4"
    >
      {isCollapsed ? (
        <motion.button
          type="button"
          title="Sign Out"
          whileHover={sidebarItemHover}
          whileTap={sidebarItemTap}
          transition={smoothTransition}
          className="flex h-11 w-full items-center justify-center rounded-2xl text-slate-500 transition-colors duration-200 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut
            size={20}
            aria-hidden="true"
          />
        </motion.button>
      ) : (
        <Button
          fullWidth
          variant="secondary"
          title="Sign Out"
          leftIcon={
            <LogOut
              size={18}
              aria-hidden="true"
            />
          }
        >
          Sign Out
        </Button>
      )}
    </motion.footer>
  );
}