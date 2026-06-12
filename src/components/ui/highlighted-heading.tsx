import React from "react";
import { YellowDash } from "@/components/ui/yellow-dash";

interface HighlightedHeadingProps {
  text: string;
  className?: string;
  highlightColor?: string;
}

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

const highlightedPhrases = new Set(highlights.map((phrase) => phrase.toLowerCase()));
const defaultBrushClasses =
  "absolute left-[-8%] bottom-[-18%] z-0 h-[0.62em] w-[118%] pointer-events-none";
const brushClassesByPhrase: Record<string, string> = {
  "your plan":
    "absolute left-[-9%] bottom-[-20%] z-0 h-[0.7em] w-[114%] pointer-events-none",
};

const highlightRegex = new RegExp(
  `(${[...highlights]
    .sort((first, second) => second.length - first.length)
    .map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})`,
  "gi",
);

export function HighlightedHeading({
  text,
  className,
  highlightColor = "text-brand-yellow",
}: HighlightedHeadingProps) {
  const parts = text.split(highlightRegex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        const isHighlighted = highlightedPhrases.has(part.toLowerCase());
        const brushClasses = brushClassesByPhrase[part.toLowerCase()] ?? defaultBrushClasses;

        if (!isHighlighted) return part;

        return (
          <span key={index} className="relative inline-block whitespace-nowrap">
            <span className="relative z-10">{part}</span>
            <YellowDash
              data-highlight-brush="true"
              className={`${brushClasses} ${highlightColor}`}
            />
          </span>
        );
      })}
    </span>
  );
}
