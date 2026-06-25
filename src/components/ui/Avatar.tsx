import { User } from "lucide-react";

import { cn } from "../../utils/cn";

type AvatarSize = "sm" | "md" | "lg" | "xl";

type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
};

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
  xl: "h-20 w-20",
};

export default function Avatar({
  src,
  alt,
  name,
  size = "md",
  className,
}: AvatarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden rounded-full bg-slate-100 text-slate-500",
        sizes[size],
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? name ?? "Avatar"}
          className="h-full w-full object-cover"
        />
      ) : name ? (
        <span className="font-semibold">
          {name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()}
        </span>
      ) : (
        <User size={20} />
      )}
    </div>
  );
}