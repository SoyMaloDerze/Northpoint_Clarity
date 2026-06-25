import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

type AuthLayoutProps = {
  children: React.ReactNode;
  preview: React.ReactNode;
};

export default function AuthLayout({
  children,
  preview,
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-white to-emerald-50">
      {/* Ambient */}

      <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-emerald-300/15 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-112 w-md rounded-full bg-slate-300/20 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen max-w-7xl">
        {/* LEFT */}

        <motion.aside
          initial={{
            opacity: 0,
            x: -24,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.55,
          }}
          className="relative hidden w-[55%] px-16 py-12 lg:flex"
        >
          <div className="relative flex w-full flex-col">
            <div className="absolute right-0 top-0 h-full w-px bg-linear-to-b from-transparent via-slate-200 to-transparent" />

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                <Sparkles
                  size={16}
                  className="text-emerald-600"
                  aria-hidden="true"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Outcome Intelligence Platform
                </span>
              </div>

              <h1 className="mt-8 text-6xl font-black tracking-tight text-slate-900">
                Northpoint
                <br />
                Clarity
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Turning everyday support into measurable outcomes,
                intelligent insights and meaningful participant
                progress.
              </p>
            </div>

            <div className="mt-12 flex-1">
              {preview}
            </div>

            <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-6 py-5 backdrop-blur">
              <div>
                <p className="text-sm text-slate-500">
                  Platform Status
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  All services operational
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,.7)]" />

                <span className="text-sm font-semibold text-emerald-700">
                  Online
                </span>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* RIGHT */}

        <motion.section
          initial={{
            opacity: 0,
            x: 24,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.55,
          }}
          className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10 lg:px-16"
        >
          <div className="w-full max-w-md">
            {children}
          </div>
        </motion.section>
      </section>
    </main>
  );
}