import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import {
  drawerVariants,
  modalBackdrop,
  smoothTransition,
} from "../../../lib/motion";


type WorkspaceDrawerProps = {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};


export default function WorkspaceDrawer({
  open,
  title,
  children,
  onClose,
}: WorkspaceDrawerProps) {

  useEffect(() => {
    if (!open) return;

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, [open]);


  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-sm"
          />


          <motion.aside
            variants={drawerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={smoothTransition}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl"
          >

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

              <h2 className="text-lg font-bold text-slate-900">
                {title}
              </h2>


              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100"
              >
                <X size={20}/>
              </button>

            </div>


            <div className="flex-1 overflow-y-auto p-6">
              {children}
            </div>

          </motion.aside>

        </>
      )}
    </AnimatePresence>
  );
}