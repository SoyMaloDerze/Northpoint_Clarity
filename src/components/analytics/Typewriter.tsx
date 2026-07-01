import {
  useEffect,
  useMemo,
  useState,
} from "react";

import BlinkingCursor from "./BlinkingCursor";

type TypewriterProps = {
  messages: string[];

  typingSpeed?: number;

  deletingSpeed?: number;

  pauseDuration?: number;

  loop?: boolean;

  className?: string;

  showCursor?: boolean;

  onMessageChange?: (
    index: number,
  ) => void;
};

export default function Typewriter({
  messages,
  typingSpeed = 55,
  deletingSpeed = 28,
  pauseDuration = 1800,
  loop = true,
  className = "",
  showCursor = true,
  onMessageChange,
}: TypewriterProps) {
  const safeMessages =
    useMemo(
      () =>
        messages.length > 0
          ? messages
          : [""],
      [messages],
    );

  const [messageIndex, setMessageIndex] =
    useState(0);

  const [displayText, setDisplayText] =
    useState("");

  const [isDeleting, setIsDeleting] =
    useState(false);

  useEffect(() => {
    const current =
      safeMessages[
        messageIndex
      ];

    let timeout: number;

    if (!isDeleting) {
      if (
        displayText.length <
        current.length
      ) {
        timeout =
          window.setTimeout(() => {
            setDisplayText(
              current.slice(
                0,
                displayText.length + 1,
              ),
            );
          }, typingSpeed);
      } else {
        timeout =
          window.setTimeout(() => {
            if (
              loop ||
              messageIndex <
                safeMessages.length -
                  1
            ) {
              setIsDeleting(
                true,
              );
            }
          }, pauseDuration);
      }
    } else {
      if (
        displayText.length > 0
      ) {
        timeout =
          window.setTimeout(() => {
            setDisplayText(
              current.slice(
                0,
                displayText.length - 1,
              ),
            );
          }, deletingSpeed);
      } else {
            timeout = window.setTimeout(() => {
                const nextIndex =
                messageIndex === safeMessages.length - 1
                    ? 0
                    : messageIndex + 1;

                setIsDeleting(false);
                setMessageIndex(nextIndex);

                onMessageChange?.(nextIndex);
            }, 0);
        }
    }

    return () =>
      clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    messageIndex,
    safeMessages,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
    onMessageChange,
  ]);

  return (
    <span
      className={`inline-flex items-center ${className}`}
    >
      <span>
        {displayText}
      </span>

      {showCursor && (
        <BlinkingCursor />
      )}
    </span>
  );
}