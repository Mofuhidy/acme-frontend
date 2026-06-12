import React from "react";
import { YellowDash } from "@/components/ui/yellow-dash";

interface HighlightedHeadingProps {
  text: string;
  className?: string;
  highlightColor?: string;
}

export function HighlightedHeading({
  text,
  className,
  highlightColor = "text-brand-yellow",
}: HighlightedHeadingProps) {
  const highlights = [
    "Management",
    "together",
    "needs",
    "your data",
    "Your Plan",
    "you are",
    "trusted",
    "sponsors",
  ];

  const regex = new RegExp(`(${highlights.join("|")})`, "i");
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isHighlighted = highlights.some(
          word => word.toLowerCase() === part.toLowerCase(),
        );

        if (!isHighlighted) return part;

        return (
          <span key={index} className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">{part}</span>

            <span className="absolute left-[-7%] bottom-[-18%] z-0 w-[114%] h-[0.35em] pointer-events-none">
              <YellowDash className={`w-full h-full ${highlightColor}`} />
            </span>
          </span>
        );
      })}
    </span>
  );
}
