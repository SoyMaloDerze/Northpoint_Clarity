import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import Card from "../ui/Card";

import ExecutiveHealthBadge from "./ExecutiveHealthBadge";

import {
  cardHover,
  smoothTransition,
} from "../../lib/motion";

type ExecutiveSummaryProps = {
  healthScore: number;

  confidence: number;

  summary: string;

  highlights: string[];
};

export default function ExecutiveSummary({
  healthScore,
  confidence,
  summary,
  highlights,
}: ExecutiveSummaryProps) {
  return (
    <motion.div
      whileHover={cardHover}
      transition={smoothTransition}
    >
      <Card className="relative overflow-hidden rounded-4xl border-slate-200 p-8 lg:p-10">

        {/* Ambient Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100/30 blur-3xl" />

        <div className="absolute -bottom-28 left-0 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative grid gap-10 xl:grid-cols-[1.8fr_360px]">

          {/* AI Brief */}

          <section>

            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2">

              <BrainCircuit
                size={18}
                className="text-indigo-600"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                Executive Briefing
              </span>

            </div>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900">
              AI Summary
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-600">
              {summary}
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4">

              {highlights.map(
                (highlight) => (
                  <motion.div
                    key={highlight}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: .45,
                    }}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="mt-1 rounded-xl bg-emerald-100 p-2">

                      <Sparkles
                        size={16}
                        className="text-emerald-600"
                      />

                    </div>

                    <p className="leading-7 text-slate-700">
                      {highlight}
                    </p>

                  </motion.div>
                ),
              )}

            </div>

          </section>

          {/* Sidebar */}

          <aside className="space-y-6">

            <ExecutiveHealthBadge
              score={healthScore}
            />

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                AI Confidence
              </p>

              <h3 className="mt-4 text-5xl font-black tracking-tight text-slate-900">
                {confidence}%
              </h3>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">

                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${confidence}%`,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  className="h-full rounded-full bg-linear-to-r from-emerald-500 to-indigo-500"
                />

              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Confidence reflects the AI's certainty
                based on current participant activity,
                reports, risks and operational trends.
              </p>

            </div>

          </aside>

        </div>

      </Card>
    </motion.div>
  );
}