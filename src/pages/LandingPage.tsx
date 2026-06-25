import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { APP } from "../constants/app";
import { AUTH_ROLES } from "../constants/auth";
import {
  pageVariants,
  smoothTransition,
  staggerContainer,
  staggerItem,
} from "../lib/motion";

import RoleCard from "../components/ui/RoleCard";

export default function LandingPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={smoothTransition}
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-white to-emerald-50"
    >
      {/* Ambient Background */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-emerald-300/15 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-lg w-lg rounded-full bg-slate-300/20 blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.7),transparent_60%)]" />

      {/* Content */}

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-16">
        {/* Hero */}

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            variants={staggerItem}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2"
          >
            <Sparkles
              size={16}
              className="text-emerald-600"
              aria-hidden="true"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Outcome Intelligence Platform
            </span>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="mt-8 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            {APP.NAME}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Choose your workspace to access participant management,
            outcome reporting, operational intelligence and care
            insights.
          </motion.p>
        </motion.div>

        {/* Role Cards */}

        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >
          {AUTH_ROLES.map((role) => (
            <motion.div
              key={role.title}
              variants={staggerItem}
            >
              <RoleCard
                title={role.title}
                description={role.description}
                icon={role.icon}
                features={role.features}
                to={role.to}
              />
            </motion.div>
          ))}
        </motion.section>

        {/* Footer */}

        <motion.footer
          variants={staggerItem}
          initial="initial"
          animate="animate"
          className="mt-16 text-center"
        >
          <p className="text-sm leading-7 text-slate-500">
            Trusted by care teams to transform daily support into
            measurable participant outcomes.
          </p>

          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-400">
            {APP.COMPANY} • Version {APP.VERSION}
          </p>
        </motion.footer>
      </div>
    </motion.main>
  );
}