import { Plus } from "lucide-react";

import Button from "../ui/Button";

type ParticipantHeaderProps = {
  title?: string;
  description?: string;

  actionLabel?: string;
  onAction?: () => void;
};

export default function ParticipantHeader({
  title = "Participants",
  description = "Manage participant records, wellbeing, support plans and day-to-day operational activities.",
  actionLabel = "Add Participant",
  onAction,
}: ParticipantHeaderProps) {
  return (
    <section className="flex flex-col gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
      {/* Content */}

      <div className="min-w-0 flex-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          {description}
        </p>
      </div>

      {/* Action */}

      <div className="w-full sm:w-auto lg:shrink-0">
        <Button
          title={actionLabel}
          size="lg"
          fullWidth
          className="sm:w-auto"
          leftIcon={
            <Plus
              size={18}
              aria-hidden="true"
            />
          }
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      </div>
    </section>
  );
}