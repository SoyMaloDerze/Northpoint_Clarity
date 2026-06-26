import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

import useSidebar from "../../app/contexts/useSidebar";

import Button from "../ui/Button";

import {
  buttonHover,
  buttonTap,
  smoothTransition,
} from "../../lib/motion";

export default function SidebarFooter() {
  const { isCollapsed } = useSidebar();

  return (
    <motion.footer
      layout
      transition={smoothTransition}
      className="mt-1 border-t border-slate-200 pt-2"
    >
      {isCollapsed ? (
        <motion.button
          type="button"
          title="Sign Out"
          whileHover={buttonHover}
          whileTap={buttonTap}
          transition={smoothTransition}
          className="flex h-11 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          <LogOut
            size={20}
            aria-hidden="true"
          />
        </motion.button>
      ) : (
        <Button
          title="Sign Out"
          fullWidth
          variant="secondary"
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