import { motion } from "framer-motion";

import {
  smoothTransition,
} from "../../lib/motion";

export type ChartLegendItem = {
  key: string;

  label: string;

  color: string;
};

type ChartLegendProps = {
  items: ChartLegendItem[];

  activeKey: string;

  onSelect: (
    key: string,
  ) => void;
};

export default function ChartLegend({
  items,
  activeKey,
  onSelect,
}: ChartLegendProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(
        (item) => {
          const active =
            activeKey ===
            item.key;

          return (
            <motion.button
              key={item.key}
              type="button"
              whileTap={{
                scale: 0.97,
              }}
              transition={
                smoothTransition
              }
              onClick={() =>
                onSelect(
                  item.key,
                )
              }
              className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor:
                    item.color,
                }}
              />

              {item.label}
            </motion.button>
          );
        },
      )}
    </div>
  );
}