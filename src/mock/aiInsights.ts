import type { AIInsight } from "../types/aiInsight";

export const aiInsights: AIInsight[] = [
  {
    id: "ai-001",
    title: "Participant engagement improving",
    summary:
      "Participant attendance increased by 11% compared to the previous week, with higher engagement across community support sessions.",
    category: "participants",
    severity: "success",
    confidence: 97,
    actionable: false,
    createdAt: "2026-07-01T09:00:00Z",
  },

  {
    id: "ai-002",
    title: "High-risk participant requires review",
    summary:
      "A participant has triggered multiple incident reports within seven days and should be reviewed by the care team.",
    category: "risks",
    severity: "critical",
    confidence: 99,
    actionable: true,
    createdAt: "2026-07-01T09:20:00Z",
  },

  {
    id: "ai-003",
    title: "Goal completion slowing",
    summary:
      "Overall goal completion has decreased by 7% during the last fortnight compared to the previous reporting period.",
    category: "goals",
    severity: "warning",
    confidence: 94,
    actionable: true,
    createdAt: "2026-07-01T09:45:00Z",
  },

  {
    id: "ai-004",
    title: "Reports submitted on time",
    summary:
      "Ninety-six percent of shift reports were submitted before the required deadline this week.",
    category: "reports",
    severity: "success",
    confidence: 98,
    actionable: false,
    createdAt: "2026-07-01T10:10:00Z",
  },

  {
    id: "ai-005",
    title: "Support worker workload increasing",
    summary:
      "Several support workers are approaching their recommended participant capacity.",
    category: "staff",
    severity: "warning",
    confidence: 91,
    actionable: true,
    createdAt: "2026-07-01T10:35:00Z",
  },

  {
    id: "ai-006",
    title: "Medication compliance maintained",
    summary:
      "Medication administration records remain fully compliant across all monitored participants.",
    category: "compliance",
    severity: "success",
    confidence: 98,
    actionable: false,
    createdAt: "2026-07-01T11:00:00Z",
  },

  {
    id: "ai-007",
    title: "Community participation trending upward",
    summary:
      "Community-based activities have increased steadily over the past month.",
    category: "participants",
    severity: "info",
    confidence: 93,
    actionable: false,
    createdAt: "2026-07-01T11:20:00Z",
  },

  {
    id: "ai-008",
    title: "Operational efficiency improved",
    summary:
      "Average report completion time has reduced by nearly twelve minutes compared to last month.",
    category: "operations",
    severity: "success",
    confidence: 95,
    actionable: false,
    createdAt: "2026-07-01T11:40:00Z",
  },

  {
    id: "ai-009",
    title: "Upcoming goal deadlines",
    summary:
      "Five participant goals are due within the next seven days and may require progress reviews.",
    category: "goals",
    severity: "warning",
    confidence: 95,
    actionable: true,
    createdAt: "2026-07-01T12:00:00Z",
  },

  {
    id: "ai-010",
    title: "Risk levels remain stable",
    summary:
      "No new high-risk classifications have been detected during the previous reporting cycle.",
    category: "risks",
    severity: "info",
    confidence: 96,
    actionable: false,
    createdAt: "2026-07-01T12:20:00Z",
  },

  {
    id: "ai-011",
    title: "Documentation quality improving",
    summary:
      "AI quality checks indicate better report completeness and more consistent documentation practices.",
    category: "reports",
    severity: "success",
    confidence: 94,
    actionable: false,
    createdAt: "2026-07-01T12:45:00Z",
  },

  {
    id: "ai-012",
    title: "Schedule conflicts detected",
    summary:
      "Two overlapping support shifts have been identified and should be reviewed before tomorrow.",
    category: "operations",
    severity: "warning",
    confidence: 92,
    actionable: true,
    createdAt: "2026-07-01T13:10:00Z",
  },

  {
    id: "ai-013",
    title: "Compliance review recommended",
    summary:
      "Several participant records are approaching mandatory review dates required for compliance.",
    category: "compliance",
    severity: "warning",
    confidence: 96,
    actionable: true,
    createdAt: "2026-07-01T13:35:00Z",
  },

  {
    id: "ai-014",
    title: "Positive participant outcomes increasing",
    summary:
      "Achievement rates across participant goals have shown consistent improvement over the last quarter.",
    category: "participants",
    severity: "success",
    confidence: 97,
    actionable: false,
    createdAt: "2026-07-01T14:00:00Z",
  },

  {
    id: "ai-015",
    title: "No critical operational issues detected",
    summary:
      "System analysis found no critical incidents requiring immediate administrative intervention today.",
    category: "operations",
    severity: "info",
    confidence: 99,
    actionable: false,
    createdAt: "2026-07-01T14:30:00Z",
  },
];