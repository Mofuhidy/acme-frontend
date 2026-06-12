import React from "react";
import { YellowDash } from "@/components/ui/yellow-dash";

interface HighlightedHeadingProps {
  text: string;
  className?: string;
  highlightColor?: string;
}

export function HighlightedHeading({ text, className, highlightColor = "text-brand-yellow" }: HighlightedHeadingProps) {
  // Regex to match words that should have the yellow underline scribble under them
  const regex = /(Management|together|needs|your data|Your Plan|you are|Say|sponsors)/i;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (regex.test(part)) {
          return (
            <span key={index} className="relative inline-block whitespace-nowrap">
              {part}
              <YellowDash className={`absolute -bottom-2.5 left-0 w-full h-auto ${highlightColor}`} />
            </span>
          );
        }
        return part;
      })}
    </span>
  );
}
