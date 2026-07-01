import { motion } from "framer-motion";

export default function BlinkingCursor() {
  return (
    <motion.span
      animate={{
        opacity: [1, 0, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
      className="ml-1 inline-block h-[1.15em] w-[0.65ch] rounded-xs bg-emerald-500 align-middle"
    />
  );
}