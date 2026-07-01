
import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import InsightCard from "./InsightCard";


import type { AIInsight } from "../../types/aiInsight";

type AIInsightsFeedProps = {
  insights: AIInsight[];
};

export default function AIInsightsFeed({
  insights,
}: AIInsightsFeedProps) {
  return (
    <section className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2">

            <BrainCircuit
              size={18}
              className="text-indigo-600"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-indigo-700">
              AI Intelligence
            </span>

          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900">
            Latest AI Insights
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-500">
            AI-generated observations based on participant activity,
            operational performance, reports, goals and risk trends.
          </p>

        </div>

        <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">

          <Sparkles
            size={16}
            className="text-indigo-500"
          />

          {insights.length} Active Insights

        </div>

      </div>

      {/* Feed */}

      <div className="grid gap-6 xl:grid-cols-2">
        {insights.map((insight,index)=>(
            <InsightCard
                key={insight.id}
                insight={insight}
                delay={index*0.08}
            />
        ))}
      </div>

    </section>
  );
}