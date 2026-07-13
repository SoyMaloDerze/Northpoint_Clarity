
type RingProps = {
  value: number;
  color: string;
  radius: number;
  strokeWidth: number;
};

function Ring({
  value,
  color,
  radius,
  strokeWidth,
}: RingProps) {
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference -
    (value / 100) * circumference;

  return (
    <>
      <circle
        cx="80"
        cy="80"
        r={radius}
        fill="none"
        stroke="#E2E8F0"
        strokeWidth={strokeWidth}
      />

      <circle
        cx="80"
        cy="80"
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 80 80)"
      />
    </>
  );
}

export default function ShiftRings() {
  return (
    <div className="flex justify-center">
      <div className="relative aspect-square w-56">
        <svg
          viewBox="0 0 180 180"
          className="h-full w-full"
        >
          <Ring
            value={68}
            color="#059669"
            radius={64}
            strokeWidth={8}
          />

          <Ring
            value={42}
            color="#F59E0B"
            radius={48}
            strokeWidth={7}
          />

          <Ring
            value={84}
            color="#2563EB"
            radius={33}
            strokeWidth={6}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-slate-900 leading-none">
            68%
          </p>

          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-500">
            Shift 
          </p>
        </div>
      </div>
    </div>
  );
}