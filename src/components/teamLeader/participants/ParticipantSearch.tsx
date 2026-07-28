import { Search, SlidersHorizontal } from "lucide-react";

import Input from "../../ui/Input";
import Button from "../../ui/Button";

type ParticipantSearchProps = {
  value: string;
  onChange: (value: string) => void;
  onFilterClick?: () => void;
};

export default function ParticipantSearch({
  value,
  onChange,
  onFilterClick,
}: ParticipantSearchProps) {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center">
      {/* Search */}

      <div className="flex-1">
        <Input
          id="participant-search"
          value={value}
          placeholder="Search participants, goals or NDIS number..."
          onChange={(event) =>
            onChange(event.target.value)
          }
          leftIcon={
            <Search
              size={18}
              aria-hidden="true"
            />
          }
          className="h-13 rounded-2xl border-slate-200 bg-white"
        />
      </div>

      {/* Mobile / Future Filters */}

      <Button
        type="button"
        variant="secondary"
        leftIcon={
          <SlidersHorizontal
            size={18}
            aria-hidden="true"
          />
        }
        onClick={onFilterClick}
        className="h-13 rounded-2xl px-5 md:w-auto"
      >
        Filters
      </Button>
    </section>
  );
}