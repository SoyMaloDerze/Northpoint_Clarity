import type {
  ISODate,
} from "./common";

export type AnalyticsTrend =
  | "up"
  | "down"
  | "stable";

export type AnalyticsMetric = {
  title: string;

  value: number;

  previousValue: number;

  unit?: string;

  trend: AnalyticsTrend;

  changePercentage: number;
};

export type AnalyticsChartPoint = {
  label: string;

  value: number;

  secondaryValue?: number;
};

export type Analytics = {
  generatedAt: ISODate;

  participants: AnalyticsMetric;

  activeGoals: AnalyticsMetric;

  completedReports: AnalyticsMetric;

  highRisks: AnalyticsMetric;

  participantGrowth: AnalyticsChartPoint[];

  goalCompletion: AnalyticsChartPoint[];

  reportSubmissions: AnalyticsChartPoint[];
};