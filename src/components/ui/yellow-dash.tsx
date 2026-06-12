import React from "react";

export function YellowDash({
  className,
  style,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={`inline-block bg-current ${className ?? ""}`.trim()}
      aria-hidden="true"
      style={{
        WebkitMaskImage: "url('/brush-highlight.svg')",
        maskImage: "url('/brush-highlight.svg')",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        ...style,
      }}
      {...props}
    />
  );
}
