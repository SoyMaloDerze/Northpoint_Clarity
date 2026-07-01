import { useMemo, useState } from "react";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "./ChartCard";
import ChartLegend, {
  type ChartLegendItem,
} from "./ChartLegend";
import ChartTooltip from "./ChartTooltip";
import ExecutiveTimeline, {
  type TimelineStep,
} from "./ExecutiveTimeline";

type ActiveChart =
  | "health"
  | "goals"
  | "risks"
  | "reports";

const operationalHealth = [
  { label: "Mon", value: 74 },
  { label: "Tue", value: 79 },
  { label: "Wed", value: 81 },
  { label: "Thu", value: 87 },
  { label: "Fri", value: 91 },
  { label: "Sat", value: 93 },
  { label: "Sun", value: 96 },
];

const goalCompletion = [
  { label: "Jan", value: 63 },
  { label: "Feb", value: 69 },
  { label: "Mar", value: 73 },
  { label: "Apr", value: 81 },
  { label: "May", value: 87 },
  { label: "Jun", value: 92 },
];

const reports = [
  { label: "Jan", value: 82 },
  { label: "Feb", value: 91 },
  { label: "Mar", value: 108 },
  { label: "Apr", value: 122 },
  { label: "May", value: 136 },
  { label: "Jun", value: 147 },
];

const risks = [
  {
    name: "Low",
    value: 48,
    color: "#10b981",
  },
  {
    name: "Medium",
    value: 27,
    color: "#f59e0b",
  },
  {
    name: "High",
    value: 16,
    color: "#f97316",
  },
  {
    name: "Critical",
    value: 9,
    color: "#ef4444",
  },
];

export default function PerformanceCharts() {
  const [
    activeChart,
    setActiveChart,
  ] =
    useState<ActiveChart>(
      "health",
    );

  const timeline =
    useMemo<
      TimelineStep[]
    >(
      () => [
        {
          id: "health",
          title:
            "Operational health improved",
          summary:
            "Overall organisational wellbeing continues to trend upward across all monitored services.",
          chart: "Operational Health",
        },
        {
          id: "goals",
          title:
            "Goal completion accelerating",
          summary:
            "Participant goals are being completed faster than the previous reporting cycle.",
          chart: "Goal Completion",
        },
        {
          id: "risks",
          title:
            "Risk exposure reduced",
          summary:
            "High and critical risks continue to decline due to earlier interventions.",
          chart: "Risk Distribution",
        },
        {
          id: "reports",
          title:
            "Reporting consistency increased",
          summary:
            "Support workers are submitting reports earlier and more consistently.",
          chart: "Report Submission",
        },
      ],
      [],
    );

  const legend: ChartLegendItem[] =
    [
      {
        key: "health",
        label:
          "Health",
        color:
          "#4f46e5",
      },
      {
        key: "goals",
        label:
          "Goals",
        color:
          "#10b981",
      },
      {
        key: "risks",
        label:
          "Risks",
        color:
          "#ef4444",
      },
      {
        key: "reports",
        label:
          "Reports",
        color:
          "#6366f1",
      },
    ];

  return (
    <section className="space-y-8">

      <ExecutiveTimeline
        steps={timeline}
        activeStep={
          activeChart
        }
        onSelect={(
          id,
        ) =>
          setActiveChart(
            id as ActiveChart,
          )
        }
      />

      <ChartLegend
        items={legend}
        activeKey={
          activeChart
        }
        onSelect={(
          key,
        ) =>
          setActiveChart(
            key as ActiveChart,
          )
        }
      />

      <div className="grid gap-6 xl:grid-cols-2">

        {/* Health */}

        <ChartCard
          active={
            activeChart ===
            "health"
          }
          onSelect={() =>
            setActiveChart(
              "health",
            )
          }
          title="Operational Health"
          subtitle="Daily organisational wellbeing trend."
        >
          <div className="h-72">

            <ResponsiveContainer>

              <AreaChart
                data={
                  operationalHealth
                }
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="label" />

                <YAxis />

                <Tooltip
                  content={
                    <ChartTooltip />
                  }
                />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#4f46e5"
                  fill="#c7d2fe"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>
        </ChartCard>

        {/* Goals */}

        <ChartCard
          active={
            activeChart ===
            "goals"
          }
          onSelect={() =>
            setActiveChart(
              "goals",
            )
          }
          title="Goal Completion"
          subtitle="Monthly goal completion trend."
        >
          <div className="h-72">

            <ResponsiveContainer>

              <BarChart
                data={
                  goalCompletion
                }
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="label" />

                <YAxis />

                <Tooltip
                  content={
                    <ChartTooltip />
                  }
                />

                <Bar
                  dataKey="value"
                  fill="#10b981"
                  radius={[
                    8,
                    8,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>
        </ChartCard>

        {/* Risks */}

        <ChartCard
          active={
            activeChart ===
            "risks"
          }
          onSelect={() =>
            setActiveChart(
              "risks",
            )
          }
          title="Risk Distribution"
          subtitle="Current organisational risk exposure."
        >
          <div className="h-72">

            <ResponsiveContainer>

              <PieChart>

                <Pie
                  data={risks}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                >
                  {risks.map(
                    (
                      item,
                    ) => (
                      <Cell
                        key={
                          item.name
                        }
                        fill={
                          item.color
                        }
                      />
                    ),
                  )}
                </Pie>

                <Tooltip
                  content={
                    <ChartTooltip />
                  }
                />

              </PieChart>

            </ResponsiveContainer>

          </div>
        </ChartCard>

        {/* Reports */}

        <ChartCard
          active={
            activeChart ===
            "reports"
          }
          onSelect={() =>
            setActiveChart(
              "reports",
            )
          }
          title="Report Submission"
          subtitle="Monthly reporting consistency."
        >
          <div className="h-72">

            <ResponsiveContainer>

              <BarChart
                data={reports}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="label" />

                <YAxis />

                <Tooltip
                  content={
                    <ChartTooltip />
                  }
                />

                <Bar
                  dataKey="value"
                  fill="#6366f1"
                  radius={[
                    8,
                    8,
                    0,
                    0,
                  ]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>
        </ChartCard>

      </div>

    </section>
  );
}