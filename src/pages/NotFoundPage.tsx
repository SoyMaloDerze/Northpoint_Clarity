import { motion } from "framer-motion";
import { ArrowLeft, TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "../components/ui/Button";

import { ROUTES } from "../lib/routes";
import {
  pageVariants,
  smoothTransition,
} from "../lib/motion";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={smoothTransition}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-100 via-white to-emerald-50 px-6"
    >
      {/* Ambient Background */}

      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-emerald-300/15 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-slate-300/20 blur-3xl" />

      <div className="relative w-full max-w-lg rounded-4xl border border-slate-200 bg-white p-10 text-center shadow-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-50 text-amber-600">
          <TriangleAlert
            size={38}
            aria-hidden="true"
          />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
          Wrong Hallway.
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-600">
          The page you're trying to access doesn't exist or has
          been moved. Return to the workspace selection to continue.
        </p>

        <div className="mt-10">
          <Button
            title="Return Home"
            fullWidth
            leftIcon={
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />
            }
            onClick={() => navigate(ROUTES.HOME)}
          >
            Return Home
          </Button>
        </div>
      </div>
    </motion.main>
  );
}