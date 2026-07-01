type ChartTooltipItem = {
  color?: string;
  name?: string;
  value?: string | number;
};

type ChartTooltipProps = {
  active?: boolean;
  label?: string | number;
  payload?: ChartTooltipItem[];
};

export default function ChartTooltip({
  active,
  label,
  payload,
}: ChartTooltipProps) {
  if (
    !active ||
    !payload ||
    payload.length === 0
  ) {
    return null;
  }

  return (
    <div className="min-w-56 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl backdrop-blur-xl">
      {label !== undefined && (
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
          {label}
        </p>
      )}

      <div className="mt-4 space-y-3">
        {payload.map((item, index) => (
          <div
            key={`${item.name ?? "item"}-${index}`}
            className="flex items-center justify-between gap-6"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor:
                    item.color ??
                    "#94a3b8",
                }}
              />

              <span className="text-sm font-medium capitalize text-slate-600">
                {item.name}
              </span>
            </div>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}