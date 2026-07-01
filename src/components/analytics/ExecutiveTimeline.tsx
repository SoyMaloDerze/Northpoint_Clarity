import { motion } from "framer-motion";
import {
  BrainCircuit,
  CheckCircle2,
  CircleAlert,
  TrendingUp,
} from "lucide-react";

import Card from "../ui/Card";

import {
  smoothTransition,
} from "../../lib/motion";

export type TimelineStep = {
  id: string;

  title: string;

  summary: string;

  chart: string;
};

type ExecutiveTimelineProps = {
  steps: TimelineStep[];

  activeStep: string;

  onSelect: (
    id: string,
  ) => void;
};

export default function ExecutiveTimeline({
  steps,
  activeStep,
  onSelect,
}: ExecutiveTimelineProps) {
  return (
    <Card className="rounded-4xl border-slate-200 p-8">
      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50">

          <BrainCircuit
            size={26}
            className="text-indigo-600"
          />

        </div>

        <div>

          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Executive Timeline
          </h2>

          <p className="mt-2 leading-7 text-slate-500">
            Follow the AI-generated operational narrative.
            Selecting a step focuses the related chart.
          </p>

        </div>

      </div>

      {/* Timeline */}

      <div className="relative mt-10">

        {/* Vertical line */}

        <div className="absolute left-5.25 top-0 h-full w-px bg-slate-200" />

        <div className="space-y-8">

          {steps.map(
            (
              step,
              index,
            ) => {
              const active =
                activeStep ===
                step.id;

              return (
                <motion.button
                  key={step.id}
                  type="button"
                  layout
                  whileTap={{
                    scale: 0.98,
                  }}
                  transition={
                    smoothTransition
                  }
                  onClick={() =>
                    onSelect(
                      step.id,
                    )
                  }
                  className="relative flex w-full gap-5 text-left"
                >
                  {/* Indicator */}

                  <motion.div
                    animate={{
                      scale: active
                        ? 1.15
                        : 1,
                    }}
                    className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                      active
                        ? "border-indigo-200 bg-indigo-100"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    {active ? (
                      <TrendingUp
                        size={18}
                        className="text-indigo-700"
                      />
                    ) : (
                      <CheckCircle2
                        size={18}
                        className="text-slate-500"
                      />
                    )}
                  </motion.div>

                  {/* Content */}

                  <div
                    className={`flex-1 rounded-3xl border p-6 transition-all duration-300 ${
                      active
                        ? "border-indigo-200 bg-indigo-50 shadow-lg"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-6">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                          Step {index + 1}
                        </p>

                        <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                          {step.summary}
                        </p>

                      </div>

                      {active && (
                        <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-700 shadow-sm">
                          Active
                        </div>
                      )}

                    </div>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-600">

                      <CircleAlert
                        size={15}
                      />

                      Focuses: {step.chart}

                    </div>

                  </div>

                </motion.button>
              );
            },
          )}

        </div>

      </div>

    </Card>
  );
}