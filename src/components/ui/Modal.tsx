import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  title?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
};

export default function Modal({
  isOpen,
  children,
  title,
  showCloseButton = true,
  onClose,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl bg-white shadow-2xl"
            >
              {(title || showCloseButton) && (
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
                  {title ? (
                    <h2 className="text-lg font-semibold text-slate-900">
                      {title}
                    </h2>
                  ) : (
                    <div />
                  )}

                  {showCloseButton && onClose && (
                    <button
                      title="Close"
                      type="button"
                      onClick={onClose}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              )}

              <div className="p-6">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}