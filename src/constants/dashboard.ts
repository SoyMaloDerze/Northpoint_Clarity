export const DASHBOARD_COLORS = {
  emerald: {
    icon: "text-emerald-600",
    background: "bg-emerald-50",
  },

  sky: {
    icon: "text-sky-600",
    background: "bg-sky-50",
  },

  violet: {
    icon: "text-violet-600",
    background: "bg-violet-50",
  },

  amber: {
    icon: "text-amber-600",
    background: "bg-amber-50",
  },

  red: {
    icon: "text-red-600",
    background: "bg-red-50",
  },

  slate: {
    icon: "text-slate-600",
    background: "bg-slate-100",
  },
} as const;

export type DashboardColor = keyof typeof DASHBOARD_COLORS;