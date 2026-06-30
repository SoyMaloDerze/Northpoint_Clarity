import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Save,
} from "lucide-react";

import Button from "../ui/Button";

import {
  smoothTransition,
  buttonHover,
  buttonTap,
} from "../../lib/motion";

type SaveBarProps = {
  visible: boolean;

  onSave?: () => void;

  onReset?: () => void;
};

export default function SaveBar({
  visible,
  onSave,
  onReset,
}: SaveBarProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.98,
          }}
          transition={smoothTransition}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2"
        >
          <div className="flex flex-col gap-5 rounded-4xl border border-slate-200 bg-white/95 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            {/* Text */}

            <div>
              <h3 className="font-semibold text-slate-900">
                Unsaved changes
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Your settings have changed. Save to apply your
                updates.
              </p>
            </div>

            {/* Actions */}

            <div className="flex gap-3">
              <motion.div
                whileHover={buttonHover}
                whileTap={buttonTap}
                transition={smoothTransition}
                className="flex-1 sm:flex-none"
              >
                <Button
                  title="Discard"
                  variant="secondary"
                  fullWidth
                  leftIcon={
                    <RotateCcw
                      size={17}
                      aria-hidden="true"
                    />
                  }
                  onClick={onReset}
                >
                  Discard
                </Button>
              </motion.div>

              <motion.div
                whileHover={buttonHover}
                whileTap={buttonTap}
                transition={smoothTransition}
                className="flex-1 text-nowrap sm:flex-none"
              >
                <Button
                  title="Save Changes"
                  fullWidth
                  leftIcon={
                    <Save
                      size={17}
                      aria-hidden="true"
                    />
                  }
                  onClick={onSave}
                >
                  Save Changes
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}