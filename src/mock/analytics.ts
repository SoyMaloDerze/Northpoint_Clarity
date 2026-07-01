import type { Analytics } from "../types/analytics";

export const analytics: Analytics = {
  generatedAt: "2026-07-01T12:00:00Z",

  participants: {
    title: "Participants",
    value: 148,
    previousValue: 139,
    trend: "up",
    changePercentage: 6.5,
  },

  activeGoals: {
    title: "Active Goals",
    value: 214,
    previousValue: 205,
    trend: "up",
    changePercentage: 4.3,
  },

  completedReports: {
    title: "Completed Reports",
    value: 1286,
    previousValue: 1210,
    trend: "up",
    changePercentage: 6.2,
  },

  highRisks: {
    title: "High Risks",
    value: 8,
    previousValue: 11,
    trend: "down",
    changePercentage: -27.3,
  },

  participantGrowth: [
    { label: "Jan", value: 82, secondaryValue: 80 },
    { label: "Feb", value: 86, secondaryValue: 83 },
    { label: "Mar", value: 91, secondaryValue: 88 },
    { label: "Apr", value: 95, secondaryValue: 92 },
    { label: "May", value: 99, secondaryValue: 97 },
    { label: "Jun", value: 104, secondaryValue: 101 },
    { label: "Jul", value: 109, secondaryValue: 106 },
    { label: "Aug", value: 115, secondaryValue: 111 },
    { label: "Sep", value: 121, secondaryValue: 118 },
    { label: "Oct", value: 128, secondaryValue: 124 },
    { label: "Nov", value: 134, secondaryValue: 130 },
    { label: "Dec", value: 139, secondaryValue: 136 },
    { label: "Jan", value: 143, secondaryValue: 140 },
    { label: "Feb", value: 146, secondaryValue: 144 },
    { label: "Mar", value: 148, secondaryValue: 147 },
  ],

  goalCompletion: [
    { label: "Jan", value: 61, secondaryValue: 65 },
    { label: "Feb", value: 64, secondaryValue: 66 },
    { label: "Mar", value: 67, secondaryValue: 69 },
    { label: "Apr", value: 69, secondaryValue: 71 },
    { label: "May", value: 72, secondaryValue: 74 },
    { label: "Jun", value: 75, secondaryValue: 76 },
    { label: "Jul", value: 77, secondaryValue: 79 },
    { label: "Aug", value: 81, secondaryValue: 82 },
    { label: "Sep", value: 84, secondaryValue: 85 },
    { label: "Oct", value: 87, secondaryValue: 88 },
    { label: "Nov", value: 90, secondaryValue: 91 },
    { label: "Dec", value: 92, secondaryValue: 93 },
    { label: "Jan", value: 94, secondaryValue: 95 },
    { label: "Feb", value: 96, secondaryValue: 96 },
    { label: "Mar", value: 98, secondaryValue: 99 },
  ],

  reportSubmissions: [
    { label: "Jan", value: 58, secondaryValue: 54 },
    { label: "Feb", value: 61, secondaryValue: 57 },
    { label: "Mar", value: 64, secondaryValue: 61 },
    { label: "Apr", value: 67, secondaryValue: 63 },
    { label: "May", value: 71, secondaryValue: 68 },
    { label: "Jun", value: 76, secondaryValue: 73 },
    { label: "Jul", value: 82, secondaryValue: 79 },
    { label: "Aug", value: 88, secondaryValue: 85 },
    { label: "Sep", value: 94, secondaryValue: 91 },
    { label: "Oct", value: 99, secondaryValue: 97 },
    { label: "Nov", value: 104, secondaryValue: 101 },
    { label: "Dec", value: 109, secondaryValue: 106 },
    { label: "Jan", value: 115, secondaryValue: 112 },
    { label: "Feb", value: 121, secondaryValue: 118 },
    { label: "Mar", value: 128, secondaryValue: 124 },
  ],
};