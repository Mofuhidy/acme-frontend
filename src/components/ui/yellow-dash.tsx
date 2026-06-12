import React from "react";

export function YellowDash({ className, ...props }: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width="483"
      height="18"
      viewBox="0 0 483 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Organic hand-drawn double stroke */}
      <path
        d="M6 11c120-6 240-7 360-5.5 40 .5 80 1 111 2.5"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 14.5c100-4 220-4.5 330-3 40 .5 80 1.5 110 3"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}
