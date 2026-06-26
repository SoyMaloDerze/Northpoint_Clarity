import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";

import NextPriorityCard from "./NextPriorityCard";
import ReviewCard from "./ReviewCard";
import Card from "../ui/Card";

import { participants } from "../../mock/participants";
import { reviews } from "../../mock/reviews";

import { smoothTransition } from "../../lib/motion";

export default function UpcomingReviews() {
  const upcomingReviews = [...reviews]
    .sort(
      (first, second) =>
        new Date(
          `${first.scheduledDate}T${first.scheduledTime}`,
        ).getTime() -
        new Date(
          `${second.scheduledDate}T${second.scheduledTime}`,
        ).getTime(),
    )
    .slice(0, 5);

  const nextPriority = upcomingReviews[0];

  const remainingReviews = upcomingReviews.slice(1);

  const getParticipantName = (
    participantId: string,
  ) => {
    const participant = participants.find(
      (item) => item.id === participantId,
    );

    return (
      participant?.fullName ??
      "Unknown Participant"
    );
  };

  return (
    <Card className="rounded-4xl border border-slate-200 p-7">
      {/* Header */}

      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Upcoming Reviews
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
            Your operational agenda for upcoming participant
            reviews requiring attention.
          </p>
        </div>

        <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 lg:flex">
          <ClipboardCheck
            size={24}
            className="text-emerald-600"
          />
        </div>
      </div>

      {/* Next Priority */}

      {nextPriority && (
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={smoothTransition}
        >
          <NextPriorityCard
            title={nextPriority.title}
            participant={getParticipantName(
              nextPriority.participantId,
            )}
            reviewType={nextPriority.type}
            date={nextPriority.scheduledDate}
            time={nextPriority.scheduledTime}
            countdown="48 mins"
            onOpen={() => {}}
          />
        </motion.div>
      )}

      {/* Upcoming */}

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {remainingReviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              ...smoothTransition,
              delay: (index + 1) * 0.08,
            }}
          >
            <ReviewCard
              title={review.title}
              participant={getParticipantName(
                review.participantId,
              )}
              reviewType={review.type}
              date={`${review.scheduledDate} • ${review.scheduledTime}`}
              urgent={
                review.status === "due-today" ||
                review.status === "overdue"
              }
              onOpen={() => {}}
            />
          </motion.div>
        ))}
      </div>
    </Card>
  );
}