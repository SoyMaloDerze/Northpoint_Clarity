import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import Typewriter from "./Typewriter";

import {
  pageVariants,
  smoothTransition,
} from "../../lib/motion";

const messages = [
  "Good morning. Welcome back.",
  "Reviewing overnight operational activity...",
  "Analysing participant wellbeing...",
  "Comparing goal completion trends...",
  "Checking active organisational risks...",
  "Generating executive briefing...",
  "AI recommendations are ready.",
];

export default function AnalyticsHeader() {
  return (
    <motion.section
      variants={pageVariants}
      initial="initial"
      animate="animate"
      transition={smoothTransition}
      className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
    >
      {/* Ambient Glow */}

      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl" />

      <div className="relative">

        {/* Top */}

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2">

              <BrainCircuit
                size={18}
                className="text-indigo-600"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                Northpoint Intelligence
              </span>

            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Analytics
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              AI-powered operational intelligence designed to
              help administrators understand organisational
              performance, identify trends and make better
              decisions.
            </p>

          </div>

          {/* Status */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 py-5">

            <div className="flex items-center gap-3">

              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [1, 0.55, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="h-3 w-3 rounded-full bg-emerald-500"
              />

              <span className="text-sm font-semibold text-slate-700">
                AI Online
              </span>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Last analysis completed just now
            </p>

          </div>

        </div>

        {/* AI Console */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.6,
          }}
          className="mt-10 overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 p-8"
        >

          <div className="flex items-center gap-3 text-emerald-400">

            <Sparkles size={18} />

            <span className="text-xs font-semibold uppercase tracking-[0.18em]">
              Executive AI Console
            </span>

          </div>

          <div className="mt-8">

            <Typewriter
              messages={messages}
              typingSpeed={38}
              deletingSpeed={18}
              pauseDuration={2000}
              className="text-2xl font-semibold leading-relaxed text-white sm:text-3xl"
            />

          </div>

        </motion.div>

      </div>
    </motion.section>
  );
}