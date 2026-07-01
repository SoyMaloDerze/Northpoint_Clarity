import { motion } from "framer-motion";

import AnalyticsHeader from "../components/analytics/AnalyticsHeader";
import ExecutiveSummary from "../components/analytics/ExecutiveSummary";
import MetricsGrid from "../components/analytics/MetricsGrid";
import AIInsightsFeed from "../components/analytics/AIInsightsFeed";
import PerformanceCharts from "../components/analytics/PerformanceCharts";
import TrendAnalysis from "../components/analytics/TrendAnalysis";
import Recommendations from "../components/analytics/Recommendations";

import { aiInsights } from "../mock/aiInsights";

import {
  pageVariants,
  smoothTransition,
} from "../lib/motion";

const summary =
  "Northpoint Clarity analysed 14,281 operational events across participant wellbeing, reporting activity, compliance and organisational performance. Overall operational health continues to improve while risk exposure has declined. Goal completion remains ahead of the previous reporting cycle, with only a small number of participants requiring immediate attention before the next review period.";

const highlights = [
  "Operational health increased by 6.8% compared to the previous reporting period.",
  "Goal completion improved by 12.4% across all supported participants.",
  "Risk exposure reduced by 9.1% following earlier interventions.",
  "Report submission reached 98% consistency across active support workers.",
];

export default function AnalyticsPage() {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={smoothTransition}
      className="relative space-y-12 overflow-hidden pb-16"
    >
      {/* Ambient Background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 right-0 h-lg w-lg rounded-full bg-indigo-100/30 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-104 w-104 rounded-full bg-emerald-100/30 blur-[120px]" />

      </div>

      <div className="relative space-y-12">

        {/* AI Hero */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
        >
          <AnalyticsHeader />
        </motion.section>

        {/* Executive Brief */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: .2,
          }}
          transition={{
            duration: .55,
          }}
        >
          <ExecutiveSummary
            healthScore={92}
            confidence={97}
            summary={summary}
            highlights={highlights}
          />
        </motion.section>

        {/* Metrics */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .1,
            duration: .55,
          }}
        >
          <MetricsGrid />
        </motion.section>

        {/* AI Insights */}

        <section
          
        >
          <AIInsightsFeed
            insights={aiInsights}
          />
        </section>

        {/* Interactive Analytics */}

        <motion.section
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: .15,
          }}
          transition={{
            delay: .2,
            duration: .6,
          }}
        >
          <PerformanceCharts />
        </motion.section>

        {/* Trends */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .25,
            duration: .55,
          }}
        >
          <TrendAnalysis />
        </motion.section>

        {/* AI Recommendations */}

        <motion.section
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .3,
            duration: .55,
          }}
        >
          <Recommendations />
        </motion.section>

      </div>
    </motion.main>
  );
}