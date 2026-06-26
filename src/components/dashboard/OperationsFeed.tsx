import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Card from "../ui/Card";
import Badge from "../ui/Badge";

import UpdateModal from "./UpdateModal";

import { notifications } from "../../mock/notifications";
import type { Notification } from "../../types/notification";

import {
  arrowHover,
  cardHover,
  smoothTransition,
} from "../../lib/motion";

export default function OperationsFeed() {
  const [selectedUpdate, setSelectedUpdate] =
    useState<Notification | null>(null);

  const latestUpdates = notifications.slice(0, 5);

  return (
    <>
      <Card className="rounded-4xl border-slate-200 p-7">
        {/* Header */}

        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">
                Live
              </span>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Latest Updates
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
              Stay informed with operational events,
              participant progress and organisation-wide
              updates.
            </p>
          </div>

          <div className="hidden rounded-2xl bg-emerald-50 p-3 lg:flex">
            <Sparkles className="text-emerald-600" />
          </div>
        </div>

        {/* Feed */}

        <div className="space-y-4">
          {latestUpdates.map((update, index) => (
            <motion.article
              key={update.id}
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.07,
                ...smoothTransition,
              }}
              whileHover={cardHover}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-emerald-300 hover:shadow-lg"
            >
              <Badge
                variant="info"
                pill={false}
              >
                {update.type.toUpperCase()}
              </Badge>

              <h3 className="mt-5 text-xl font-semibold text-slate-900 transition-colors group-hover:text-emerald-700">
                {update.title}
              </h3>

              <p className="mt-3 line-clamp-2 text-sm leading-7 text-slate-600">
                {update.message}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-slate-500 transition-colors group-hover:text-emerald-700">
                  {update.createdAt}
                </span>

                <motion.button
                  whileHover={arrowHover}
                  transition={smoothTransition}
                  onClick={() =>
                    setSelectedUpdate(update)
                  }
                  className="flex items-center gap-2 font-semibold text-emerald-600"
                >
                  View Details

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </Card>

      <UpdateModal
        open={selectedUpdate !== null}
        update={selectedUpdate}
        onClose={() =>
          setSelectedUpdate(null)
        }
      />
    </>
  );
}