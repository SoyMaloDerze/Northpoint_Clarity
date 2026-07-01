import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useInView
} from "framer-motion";

type AnimatedCounterProps = {
  value: number;

  duration?: number;

  delay?: number;

  decimals?: number;

  prefix?: string;

  suffix?: string;

  className?: string;
};

export default function AnimatedCounter({
  value,
  duration = 1400,
  delay = 0,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref =
    useRef<HTMLSpanElement | null>(
      null,
    );

  const frame =
    useRef<number | null>(null);

  const hasAnimated =
    useRef(false);

  const isInView =
    useInView(ref, {
      once: true,
      margin: "-80px",
    });


  const [count, setCount] =
    useState(0);

  // Allow the animation to replay whenever
  // the value changes (future backend updates).

  useEffect(() => {
    hasAnimated.current = false;
  }, [value]);

  useEffect(() => {

    if (
      !isInView ||
      hasAnimated.current
    ) {
      return;
    }

    hasAnimated.current = true;

    let startTime = 0;

    const animate = (
      timestamp: number,
    ) => {
      if (!startTime) {
        startTime =
          timestamp;
      }

      const progress =
        Math.min(
          (timestamp -
            startTime) /
            duration,
          1,
        );

      // Ease Out Cubic

      const eased =
        1 -
        Math.pow(
          1 - progress,
          3,
        );

      setCount(
        value * eased,
      );

      if (
        progress < 1
      ) {
        frame.current =
          requestAnimationFrame(
            animate,
          );
      } else {
        // Ensure we always end on
        // the exact final value.

        setCount(value);
      }
    };

    const timeout =
      window.setTimeout(() => {
        frame.current =
          requestAnimationFrame(
            animate,
          );
      }, delay);

    return () => {
      clearTimeout(
        timeout,
      );

      if (
        frame.current !==
        null
      ) {
        cancelAnimationFrame(
          frame.current,
        );
      }
    };
  }, [
    duration,
    delay,
    isInView,
    value,
  ]);

  return (
    <span
      ref={ref}
      className={className}
    >
      {prefix}
      {count.toFixed(
        decimals,
      )}
      {suffix}
    </span>
  );
}