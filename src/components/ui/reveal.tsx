"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = React.ComponentPropsWithoutRef<"div"> & {
  delay?: number;
  offset?: "sm" | "md" | "lg";
};

function Reveal({
  className,
  delay = 0,
  offset = "md",
  style,
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.16 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-auto motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : cn(
              "opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
              offset === "sm" && "translate-y-3",
              offset === "md" && "translate-y-6",
              offset === "lg" && "translate-y-10"
            ),
        className
      )}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    />
  );
}

export { Reveal };
