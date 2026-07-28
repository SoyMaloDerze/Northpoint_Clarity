import { SearchX } from "lucide-react";

import Button from "../../ui/Button";
import Card from "../../ui/Card";

type ParticipantEmptyStateProps = {
  onReset?: () => void;
};

export default function ParticipantEmptyState({
  onReset,
}: ParticipantEmptyStateProps) {
  return (
    <Card className="rounded-4xl border-dashed border-slate-300 px-8 py-14">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <div className="flex h-18 w-18 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <SearchX
            size={32}
            aria-hidden="true"
          />
        </div>

        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
          No participants found
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          We couldn't find anyone matching your current search or
          filters. Try adjusting your criteria or clear the filters to
          view your full caseload.
        </p>

        {onReset && (
          <Button
            variant="primary"
            className="mt-8"
            onClick={onReset}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </Card>
  );
}